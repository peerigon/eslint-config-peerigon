import globals from "globals";

/**
 * @type {Array<import("eslint").Linter.FlatConfig>}
 */
export const browser = [
  {
    languageOptions: {
      parserOptions: {
        globals: { ...globals.browser },
      },
    },
  },
];

export default browser;
