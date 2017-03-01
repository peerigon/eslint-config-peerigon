module.exports = {
    env: {
        mocha: true
    },
    rules: {
        "padded-blocks": "off", // mocha blocks tend to be more readable with padding
        "max-nested-callbacks": "off", // mocha blocks are nested all the way down
        "no-undefined": "off",// sometimes it's necessary to check for undefined explicitly
        "brace-style": ["error", "1tbs", { allowSingleLine: true }], // in order to make mocks more condensed, single line blocks are allowed in tests,
        "no-unused-expressions": "off"  // chai uses these as assertions
    }
};
