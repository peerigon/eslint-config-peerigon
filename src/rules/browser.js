import globals from "globals";
import base from "./base";

/**
 * @type {Array<import("eslint").Linter.FlatConfig>}
 */
export default [
    ...base,
    { languageOptions: { globals: { ...globals.browser } } },
];
