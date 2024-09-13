import globals from "globals";

/**
 * @type {Array<import("eslint").Linter.Config>}
 */
export const node = [
  {
    languageOptions: {
      parserOptions: {
        globals: { ...globals.node },
      },
    },
  },
];

export default node;
