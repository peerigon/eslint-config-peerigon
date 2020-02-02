/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

const globPatterns = require("../globPatterns.js");

module.exports = {
    rules: {
        /* eslint-enable sort-keys */
        "react/jsx-no-literals": "error",  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
        /* eslint-disable sort-keys */
    },
    overrides: [
        {
            files: globPatterns.tests,
            rules: {
                /* eslint-enable sort-keys */
                // It's quite common in tests to use example strings
                "react/jsx-no-literals": "off"
                /* eslint-disable sort-keys */
            }
        }
    ],
};
