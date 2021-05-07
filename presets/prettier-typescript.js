/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

module.exports = {
    extends: [
        "peerigon",
        "peerigon/typescript",
        "peerigon/styles/prefer-arrow",
        // prettier must be at the end
        "prettier",
    ],
    root: true,
};
