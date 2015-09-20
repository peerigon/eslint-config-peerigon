"use strict";

var combine = require("./lib/combine.js");
var base = require("./lib/configs/base.js");

module.exports = combine(base(), "es5", "tests");
