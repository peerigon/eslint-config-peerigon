/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

export default {
    extends: [
        "peerigon",
        "peerigon/typescript",
        "peerigon/styles/prefer-arrow",
        // prettier must be at the end
        "prettier",
    ],
    root: true,
};