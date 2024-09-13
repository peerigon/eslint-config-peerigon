import globals from "globals";

/**
 * @type {Array<import("eslint").Linter.Config>}
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
