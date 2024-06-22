import globals from "globals";

/**
 * @type {Array<import("eslint").Linter.FlatConfig>}
 */
export default [
    {
        languageOptions: {
            parserOptions: {
                globals: { ...globals.browser },
            },
        },
    },
];
