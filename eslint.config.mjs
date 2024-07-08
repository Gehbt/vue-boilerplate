// @ts-check
import { createRequire } from "node:module";
import js from "@eslint/js";
import ts from "typescript-eslint";

const require = createRequire(import.meta.url);

const vue = require("eslint-plugin-vue");
export default ts.config(
  {
    ignores: ["node_modules", "dist"],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  .../** @type {*} */ (vue.configs["flat/recommended"]),
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  },
  {
    rules: {
      "no-undef": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-namespace": [
        "error",
        {
          allowDeclarations: true,
        },
      ],
      "vue/multi-word-component-names": [
        "error",
        {
          ignores: [
            "index",
            "about",
            "index.page",
            "about.page",
            "[...404].page",
          ],
        },
      ],
    },
  },
);
