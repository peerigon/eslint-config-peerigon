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
        "flowtype/boolean-style": ["warn", "boolean"],
        "flowtype/define-flow-type": "warn",
        "flowtype/delimiter-dangle": ["warn", "never"],
        "flowtype/generic-spacing": ["warn", "never"],
        "flowtype/no-primitive-constructor-types": "warn",
        "flowtype/no-weak-types": "warn",
        "flowtype/object-type-delimiter": ["warn", "comma"],
        // If we don't enforce return type annotation, we don't need to enforce param types
        // See below for reasoning
        "flowtype/require-parameter-type": "off",
        // Annotating curried functions is pretty overkill
        // Also pure lambda functions don't need a return type
        "flowtype/require-return-type": "off",
        "flowtype/require-valid-file-annotation": [
            "warn",
            "always",
            {
                annotationStyle: "line",
            },
        ],
        // It's ok to not declare types inside functions
        "flowtype/require-variable-type": "off",
        "flowtype/semi": ["warn", "always"],
        "flowtype/sort-keys": "off",
        "flowtype/space-after-type-colon": ["warn", "always"],
        "flowtype/space-before-generic-bracket": ["warn", "never"],
        "flowtype/space-before-type-colon": ["warn", "never"],
        "flowtype/type-id-match": "off",
        "flowtype/union-intersection-spacing": ["warn", "always"],
        "flowtype/use-flow-type": "warn",
    },
};
