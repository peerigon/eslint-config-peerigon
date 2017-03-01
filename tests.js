/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    env: {
        mocha: true
    },
    rules: {
        /* eslint-enable sort-keys */
        "brace-style": ["error", "1tbs", { allowSingleLine: true }], // in order to make mocks more condensed, single line blocks are allowed in tests,
        "max-nested-callbacks": "off", // mocha blocks are nested all the way down
        "max-statements-per-line": ["error", { max: 2 }], // can increase the readability of a test if simple mocking functions are in one line
        "no-undefined": "off",// sometimes it's necessary to check for undefined explicitly
        "no-unused-expressions": "off",  // chai uses these as assertions
        "padded-blocks": "off" // mocha blocks tend to be more readable with padding
    }
};
