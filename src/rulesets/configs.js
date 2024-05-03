/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

export default {
    env: {
        node: true,
    },
    rules: {
        /* eslint-enable sort-keys */
        // Config files are usually not imported anywhere else so this is fine
        "import/no-anonymous-default-export": "off",
        /* eslint-disable sort-keys */
    },
};
