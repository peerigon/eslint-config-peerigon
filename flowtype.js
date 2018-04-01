/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    parser: "babel-eslint",
    plugins: [
        "flowtype"
    ],
    extends: ["plugin:flowtype/recommended"],
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: false,
        },
    },
    rules: {
        /* eslint-enable sort-keys */
        "flowtype/boolean-style": ["error", "boolean"],
        "flowtype/define-flow-type": "warn",
        "flowtype/delimiter-dangle": ["error", "never"],
        "flowtype/generic-spacing": ["error", "never"],
        "flowtype/no-dupe-keys": "error",
        "flowtype/no-primitive-constructor-types": "error",
        "flowtype/no-weak-types": "error",
        "flowtype/object-type-delimiter": ["error", "comma"],
        // If we don't enforce return type annotation, we don't need to enforce param types
        // See below for reasoning
        "flowtype/require-parameter-type": "off",
        // Annotating curried functions is pretty overkill
        // Also pure lambda functions don't need a return type
        "flowtype/require-return-type": "off",
        "flowtype/require-valid-file-annotation": [
            "error",
            "always",
            {
                annotationStyle: "line",
            },
        ],
        // It's ok to not declare types inside functions
        "flowtype/require-variable-type": "off",
        "flowtype/semi": ["error", "always"],
        "flowtype/sort-keys": "off",
        "flowtype/space-after-type-colon": ["error", "always"],
        "flowtype/space-before-generic-bracket": ["error", "never"],
        "flowtype/space-before-type-colon": ["error", "never"],
        "flowtype/type-id-match": "off",
        "flowtype/union-intersection-spacing": ["error", "always"],
        "flowtype/use-flow-type": "warn",
    },
};
