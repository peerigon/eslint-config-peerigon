"use strict";

function tests(config) {
    // mocha blocks tend to be more readable with padding
    config.rules["padded-blocks"] = 0;
    // mocha blocks are nested all the way down
    config.rules["max-nested-callbacks"] = 0;
    // sometimes it's necessary to check for undefined explicitly
    config.rules["no-undefined"] = 0;
    // in order to make mocks more condensed, single line blocks are allowed in tests
    config.rules["brace-style"] = [2, "1tbs", { "allowSingleLine": true }];
}

module.exports = tests;
