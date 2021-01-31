"use strict";

module.exports = {
    tests: ["**/*.{test,spec,stories}.*", "**/test{s,}/**"],
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
        "**/*extend", // mostly because of @testing-library/jest-dom/extend-expect
    ],
    typescript: ["*.ts", "*.tsx"],
    react: ["*.jsx", "*.tsx"],
};
