module.exports = {
    parser: "espree",
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        }
    },
    extends: [
        "plugin:import/react"
    ],
    rules: {
        "no-nested-ternary": "off", // nested ternaries can increase the readability of JSX components
        "react/display-name": "error",
        "react/no-danger": "error",
        "react/no-deprecated": "error",
        "react/no-did-mount-set-state": ["error", "disallow-in-func"],
        "react/no-did-update-set-state": ["error", "disallow-in-func"],
        "react/no-direct-mutation-state": "error",
        "react/no-is-mounted": "error",
        'react/no-multi-comp': ["error", { ignoreStateless: true }],
        "react/no-set-state": "error",
        "react/no-string-refs": "error",
        "react/no-unknown-property": "error",
        "react/prefer-es6-class": "error",
        "react/prefer-stateless-function": "error",
        "react/prop-types": "error",
        "react/react-in-jsx-scope": "error",
        "react/require-render-return": "error",
        "react/self-closing-comp": "error",
        "react/sort-comp": "off",
        "react/sort-prop-types": "off",
        "react/wrap-multilines": "error",
        "react/no-render-return-value": "error",
        "react/no-unescaped-entities": "error",
        "react/no-children-prop": "error",
        "react/style-prop-object": "off",
        "react/no-unused-prop-types": "error",
        "react/no-danger-with-children": "error",
        "react/forbid-component-props": "off",
        "react/no-find-dom-node": "error",

        "react/jsx-boolean-value": "off",
        "react/jsx-closing-bracket-location": ["error", "line-aligned"],
        "react/jsx-curly-spacing": ["error", "never"],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/jsx-handler-names": ["error", {
            eventHandlerPrefix: "handle",
            eventHandlerPropPrefix: "on"
        }],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-key": "error",
        "react/jsx-max-props-per-line": ["error", {
            maximum: 4,
        }],
        "react/jsx-no-bind": ["error", {
            ignoreRefs: false,
            allowArrowFunctions: false,
            allowBind: false,
        }],
        "react/jsx-no-duplicate-props": ["error", {
            ignoreCase: true,
        }],
        "react/jsx-no-undef": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-sort-props": "off",
        "react/jsx-space-before-closing": ["error", "always"],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-no-target-blank": "error",
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-filename-extension": "off",
    }
};
