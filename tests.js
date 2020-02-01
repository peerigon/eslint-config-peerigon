/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

const options = require("./options.js");

module.exports = {
    env: {
        mocha: true,
        jest: true
    },
    rules: {
        /* eslint-enable sort-keys */
        // chai uses these as assertions
        "babel/no-unused-expressions": "off",
        // In order to make mocks more condensed, single line blocks are allowed in tests
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        // Long tests are not necessarily a problem, but there is a certain limit
        "max-lines": "off",
        // mocha blocks are nested all the way down
        "max-nested-callbacks": "off",
        // Can increase the readability of a test if simple mocking functions are in one line
        "max-statements-per-line": ["error", { max: 2 }],
        // Allows empty catch blocks in try clauses
        "no-empty": "off",
        // If you want to test for thrown errors in a constructor function, it's common to ignore the result
        // @see https://github.com/peerigon/clockodo/pull/1#discussion_r180795825
        "no-new": "off",
        "quotes": ["error", "double", Object.assign({}, options["quotes"], {
            // Allow Jest inline snapshots
            allowTemplateLiterals: true,
        })],
    }
};
