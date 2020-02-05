/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

const globPatterns = require("../glob-patterns.js");

module.exports = {
    rules: {
        "import/no-default-export": "error"
    },
    overrides: [
        {
            files: globPatterns.react,
            rules: {
                "import/no-default-export": "off"
            },
        }
    ],
};
