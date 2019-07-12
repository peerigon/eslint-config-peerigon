"use strict";

module.exports = {
    tests: [
        "**/*.{test,spec}.*",
        "**/test{s,}/**",
    ],
    tooling: [
        "config/**",
        "script{,s}/**", // contains usually npm scripts
        "tool{,s}/**", // often used for other scripts
    ],
    withSideEffects: [
        "**/*.css",
        "**/*.less",
        "**/*.scss",
        "**/*.sass",
        "**/*register",
        "**/*extend",  // mostly because of @testing-library/jest-dom/extend-expect
    ]
};
