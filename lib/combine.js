"use strict";

var configOverrides = {
    es5: require("./configs/overrides/es5.js"),
    tests: require("./configs/overrides/tests.js")
};

function combine(config, override1, override2, override3) {
    Array.prototype.slice.call(arguments, 1).forEach(function forEachConfigName(name) {
        var override = configOverrides[name];

        if (typeof override !== "function") {
            throw new Error("Unknown config override " + name);
        }
        override(config);
    });

    return config;
}

module.exports = combine;
