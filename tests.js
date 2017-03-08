/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    env: {
        mocha: true
    },
    rules: {
        /* eslint-enable sort-keys */
        // In case the fp rules are used
        "arrow-body-style": ["error", "as-needed"],
        // In order to make mocks more condensed, single line blocks are allowed in tests
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        // mocha blocks are nested all the way down
        "max-nested-callbacks": "off",
        // In case the fp rules are used
        "max-statements": "off",
        // Can increase the readability of a test if simple mocking functions are in one line
        "max-statements-per-line": ["error", { max: 2 }],
        // Sometimes it's necessary to check for undefined explicitly
        "no-undefined": "off",
        // chai uses these as assertions
        "no-unused-expressions": "off",
        // mocha blocks tend to be more readable with padding
        "padded-blocks": "off"
    }
};
