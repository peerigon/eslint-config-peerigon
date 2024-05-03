/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

module.exports = {
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/array-type": [
            "warn",
            {
                default: "array",
            },
        ],
    },
};
