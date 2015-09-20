"use strict";

function es5(config) {
    config.rules["no-var"] = 0;
    config.rules["prefer-arrow-callback"] = 0;
    config.rules["object-shorthand"] = 0;
}

module.exports = es5;
