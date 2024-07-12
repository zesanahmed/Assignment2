import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { process: true, console: true } } },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": 2,
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": 1,
    },
  },
  {
    ignores: [".config/*", "**/dist/", "**/node_modules/"],
  },
];
