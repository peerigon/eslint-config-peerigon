import globals from "globals";

/**
 * @type {Array<import("eslint").Linter.Config>}
 */
export const node = [
  {
    languageOptions: {
      globals: { ...globals.node },
    },
  },
];

export default node;
