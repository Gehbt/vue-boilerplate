import express from "express";
import { createServer as createViteServer } from "vite";
import type { ViteDevServer } from "vite";

async function createServer(root = process.cwd()) {
  const app = express();

  /**
   * @type {import('vite').ViteDevServer}
   */
  const vite: ViteDevServer = await createViteServer({
    root,
    logLevel: "info",
    server: {
      middlewareMode: true,
      watch: {
        // During tests we edit the files too fast and sometimes chokidar
        // misses change events, so enforce polling for consistency
        usePolling: true,
        interval: 100,
      },
    },
  });
  // use vite's connect instance as middleware
  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;

      const { render } = (await vite.ssrLoadModule(
        "/server/entry.ts",
      )) as RenderModule;

      const [appHtml, ctx] = await render(url, {});

      res
        .status(200)
        .set({ "Content-Type": "text/plain" })
        .end(
          JSON.stringify(
            {
              html: appHtml,
              scripts: "???", // ctx.renderScripts(),
              styles: "???", // ctx.renderStyles(),
              ctx,
            },
            null,
            2,
          ),
        );
    }
    catch (e: unknown) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
        console.log(e.stack);
        res.status(500).end(e.stack);
      }
      else {
        console.debug(e);
        res.status(500).end(JSON.stringify(e));
      }
    }
  });

  return { app, vite };
}

if (import.meta.main) {
  createServer().then(({ app }) =>
    app.listen(8017, () => {
      console.log("http://localhost:8017");
    }),
  );
}

// for test use
export { createServer };

type RenderModule = {
  render: (
    url: string,
    ctx: Partial<RenderContext>,
  ) => Promise<[string, RenderContext]>;
};

export type RenderContext = {
  [key: string]: unknown;
  renderScripts: () => string;
  renderStyles: () => string;
};
