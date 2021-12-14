/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

module.exports = {
    env: {
        node: true,
    },
    rules: {
        // Config files are usually not imported anywhere else so this is fine
        "import/no-anonymous-default-export": "off",
    },
};
