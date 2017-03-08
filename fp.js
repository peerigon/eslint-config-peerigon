// Special rules for functional programming

/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    plugins: [
        "flowtype"
    ],
    rules: {
        /* eslint-enable sort-keys */
        // Arrow functions are very common in functional programming, that's why we allow them as expression.
        // But they should return immediately. Unfortunately, there's currently no rule to enforce that.
        // https://github.com/eslint/eslint/issues/7765
        "arrow-body-style": ["error", "never"],
        "flowtype/semi": ["error", "never"],
        "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
        "max-statements": ["error", 1],
        // Can be quite common in functional programming
        "no-nested-ternary": "off",
        // Sequences are the only way to do multiple side-effects while still allowing only one statement
        "no-sequences": "off",
        // The void operator can be used to flag functions with side-effects
        "no-void": "off",
        // When you can only do one statement, you don't need semicolons
        "semi": ["error", "never"]
    }
};
