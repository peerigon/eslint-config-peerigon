/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

export default {
    plugins: ["prefer-arrow"],
    rules: {
        "func-style": ["warn", "expression"], // http://eslint.org/docs/rules/func-style
        // https://github.com/TristonJ/eslint-plugin-prefer-arrow
        "prefer-arrow/prefer-arrow-functions": [
            "warn",
            {
                disallowPrototype: false,
                singleReturnOnly: false,
                // We used to enforce arrow functions also for class methods (as class properties)
                // but arrow functions in sub-classes can't call their overridden counterpart
                // in their super-class, see https://stackoverflow.com/a/52823577
                classPropertiesAllowed: false,
            },
        ],
    },
};
