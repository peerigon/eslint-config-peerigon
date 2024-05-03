/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

export default {
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
