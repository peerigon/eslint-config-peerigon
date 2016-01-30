module.exports = {
    "env": {
        "mocha": true
    },
    "rules": {
        "padded-blocks": 0, // mocha blocks tend to be more readable with padding
        "max-nested-callbacks": 0, // mocha blocks are nested all the way down
        "no-undefined": 0,// sometimes it's necessary to check for undefined explicitly
        "brace-style": [2, "1tbs", { "allowSingleLine": true }] // in order to make mocks more condensed, single line blocks are allowed in tests
    }
};
