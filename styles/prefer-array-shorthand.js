/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        "@typescript-eslint/array-type": [
            "warn",
            {
                default: 'array',
            }
        ]
    }
};
