// @ts-check
import ts from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import type { ConfigArray } from "typescript-eslint";
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

export default <ConfigArray>defineConfigWithVueTs(
  stylistic.configs.customize({
    // the following options are the default values
    semi: true,
    indent: 2,
    quotes: "double",
    commaDangle: "always-multiline",
    // ...
  }),
  // js.configs.recommended,
  ts.configs.recommended,
  // eslint-plugin-vue use `import('eslint').Linter.Config`, but @vue/eslint-config-typescript use import('@typescript-eslint/utils').FlatConfig.Config;
  // LanguageOptions.ecmaVersion in eslint is Number, but in @typescript-eslint/utils' is String
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
