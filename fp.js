// Special rules for functional programming

/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    rules: {
        // FP languages like Haskell or Elm use an expression-like syntax for functions
        "func-style": ["error", "expression"],
        // Functions with a lot of statements also tend to be imperative. Try to split
        // the function into multiple parts if you see this warning.
        "max-statements": ["warn", 10],
        // Can be quite common in functional programming
        "no-nested-ternary": "off",
        // FP prefers expressions instead of side-effects. If an expression is unused, it's
        // a strong sign that you are doing side-effects.
        "no-unused-expressions": ["error"],
        // The syntax constructs are typical for procedural/imperative code
        // Use their functional counter-parts instead
        "no-restricted-syntax": ["error",
            "WithStatement", // deprecated
            // Side-effect expressions should be prefixed with void
            // Hopefully we can improve the error message some day: https://github.com/eslint/eslint/issues/8298
            "ExpressionStatement > *:not(AssignmentExpression,UnaryExpression[operator=void],Literal[value=/use strict/],CallExpression[callee.type=Super])",
            // We prefer arrow functions unless an actual function is required:
            // - generators need the function keyword
            // - a function that wants to capture `this` inside the function. Just name that function `captureThis` and this error will be gone.
            "FunctionDeclaration[generator=false]:not([id.name=captureThis])",
            "*:not(MethodDefinition) > FunctionExpression[generator=false]:not([id.name=captureThis])",
            // Use forEach, map, reduce, etc.
            "ForStatement",
            "WhileStatement"
        ], // http://eslint.org/docs/rules/no-restricted-syntax
    }
};
