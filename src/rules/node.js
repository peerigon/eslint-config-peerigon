import globals from "globals";

/**
 * @type {Array<import("eslint").Linter.FlatConfig>}
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
