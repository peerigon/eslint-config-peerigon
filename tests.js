"use strict";

var base = require("./index.js");
var es5 = JSON.parse(JSON.stringify(base));

es5.rules["no-var"] = 0;
es5.rules["prefer-arrow-callback"] = 0;

module.exports = es5;
