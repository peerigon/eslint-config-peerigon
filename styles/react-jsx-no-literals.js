/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

const globPatterns = require("../globPatterns.js");

module.exports = {
    rules: {
        "react/jsx-no-literals": "error",  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    },
    // TODO: With ESLint 6 you can pass an array of files. Change this once we've updated.
    overrides: globPatterns.tests.map(testGlobPattern => ({
        files: testGlobPattern,
        rules: {
            // It's quite common in tests to use example strings
            "react/jsx-no-literals": "off"
        }
    })),
};
