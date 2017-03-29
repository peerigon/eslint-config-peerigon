// Special rules for functional programming

/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    rules: {
        "func-style": ["error", "expression"],
        "max-statements": ["warn", 10],
        // Can be quite common in functional programming
        "no-nested-ternary": "off",
        "no-unused-expressions": ["error"],
        // The syntax constructs are typical for procedural/imperative code
        // Use their functional counter-parts instead
        "no-restricted-syntax": ["error",
            "WithStatement", // deprecated
            // Side-effect expressions should be prefixed with void
            // Hopefully we can improve the error message some day: https://github.com/eslint/eslint/issues/8298
            "ExpressionStatement > *:not(AssignmentExpression,UnaryExpression[operator=void],Literal[value=/use strict/],CallExpression[callee.type=Super])",
            "FunctionDeclaration[generator=false]:not([id.name=captureThis])",
            "*:not(MethodDefinition) > FunctionExpression[generator=false]:not([id.name=captureThis])",
            "ForStatement", // use forEach, map, reduce, etc.
            "WhileStatement" // use forEach, map, reduce, etc.
        ], // http://eslint.org/docs/rules/no-restricted-syntax
    }
};
