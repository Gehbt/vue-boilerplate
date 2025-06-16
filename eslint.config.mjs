// @ts-check
import { createRequire } from "node:module";
import js from "@eslint/js";
import ts from "typescript-eslint";
import vue from "eslint-plugin-vue";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
  configureVueProject,
} from "@vue/eslint-config-typescript";

configureVueProject({
  tsSyntaxInTemplates: true,
  scriptLangs: ["ts"],
});

export default defineConfigWithVueTs(
  // js.configs.recommended,
  ts.configs.recommended,
  // eslint-plugin-vue use `import('eslint').Linter.Config`, but @vue/eslint-config-typescript use import('@typescript-eslint/utils').FlatConfig.Config;
  // LanguageOptions.ecmaVersion in eslint is Number, but in @typescript-eslint/utils' is String
  // @ts-expect-error - ...

  vue.configs["flat/recommended"],
  vueTsConfigs.recommended,
  {
    files: ["**/*.{vue,ts}"],
    languageOptions: {
      sourceType: "module",
      parserOptions: {
        parser: ts.parser,
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
      "vue/component-name-in-template-casing": ["error", "PascalCase"],
      "vue/block-lang": [
        "error",
        {
          script: {
            lang: "ts",
          },
        },
      ],
    },
  },
);
