/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

const globPatterns = require("../glob-patterns.js");

module.exports = {
    rules: {
        "import/no-default-export": "warn",
    },
    overrides: [
        {
            files: globPatterns.react,
            rules: {
                "import/no-default-export": "off",
            },
        },
    ],
};
