"use strict";

function es5(config) {
    config.rules["no-var"] = 0;
    config.rules["prefer-arrow-callback"] = 0;
    config.rules["prefer-const"] = 0;
    config.rules["prefer-spread"] = 0;
    config.rules["prefer-reflect"] = 0;
    config.rules["prefer-template"] = 0;
    config.rules["object-shorthand"] = 0;
}

module.exports = es5;
