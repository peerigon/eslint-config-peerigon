"use strict";

module.exports = {
    printWidth: 80,
    // When we're using Prettier, we can also just use tabs.
    // This way every developer is free to configure their
    // preferred indentation width.
    useTabs: true,
    semi: true,
    singleQuote: false,
    quoteProps: "as-needed",
    jsxSingleQuote: false,
    trailingComma: "all",
    bracketSpacing: false,
    jsxBracketSameLine: false,
    // Adding a parameter to an arrow functions becomes easier when we add parens all the time.
    arrowParens: "always",
    proseWrap: "preserve",
    htmlWhitespaceSensitivity: "css",
    vueIndentScriptAndStyle: true,
    endOfLine: "lf"
};
