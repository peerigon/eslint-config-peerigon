/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    plugins: [
        "prefer-arrow"
    ],
    rules: {
        "func-style": ["error", "expression"], // http://eslint.org/docs/rules/func-style
        // https://github.com/TristonJ/eslint-plugin-prefer-arrow
        "prefer-arrow/prefer-arrow-functions": [
            "error",
            {
              "disallowPrototype": false,
              "singleReturnOnly": false,
              "classPropertiesAllowed": true
            }
        ]
    }
};
