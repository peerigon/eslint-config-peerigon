/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    plugins: [
        "react"
    ],
    extends: [
        "plugin:import/react"
    ],
    rules: {
        /* eslint-enable sort-keys */
        // Allow certain react methods to have no this
        // See https://github.com/peerigon/eslint-config-peerigon/issues/12
        "class-methods-use-this": ["warn", {
            "exceptMethods": [
                "render",
                "getInitialState",
                "getDefaultProps",
                "getChildContext",
                "shouldComponentUpdate",
            ],
        }],
        "no-nested-ternary": "off", // nested ternaries can increase the readability of JSX components
        "react/display-name": "error",
        "react/forbid-component-props": "off",
        "react/jsx-boolean-value": "off",
        "react/jsx-closing-bracket-location": ["error", "line-aligned"],
        "react/jsx-curly-spacing": ["error", "never"],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-filename-extension": "off",
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/jsx-handler-names": ["error", {
            eventHandlerPrefix: "handle",
            eventHandlerPropPrefix: "on"
        }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-key": "error",
        "react/jsx-max-props-per-line": ["error", {
            maximum: 4,
        }],
        "react/jsx-no-bind": ["error", {
            allowArrowFunctions: false,
            allowBind: false,
            ignoreRefs: false
        }],
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-duplicate-props": ["error", {
            ignoreCase: true,
        }],
        "react/jsx-no-target-blank": "error",
        "react/jsx-no-undef": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-sort-props": "off",
        "react/jsx-tag-spacing": ["error", {
            "afterOpening": "never",
            "beforeSelfClosing": "always",
            "closingSlash": "never",
        }],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-wrap-multilines": "error",
        "react/no-children-prop": "error",
        "react/no-danger": "error",
        "react/no-danger-with-children": "error",
        "react/no-deprecated": "error",
        "react/no-did-mount-set-state": ["error", "disallow-in-func"],
        "react/no-did-update-set-state": ["error", "disallow-in-func"],
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-is-mounted": "error",
        'react/no-multi-comp': ["error", { ignoreStateless: true }],
        "react/no-render-return-value": "error",
        "react/no-set-state": "off",
        "react/no-string-refs": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": "error",
        "react/no-unused-prop-types": "error",
        "react/prefer-es6-class": "error",
        "react/prefer-stateless-function": "warn",
        "react/prop-types": "error",
        "react/react-in-jsx-scope": "off",
        "react/require-render-return": "error",
        "react/self-closing-comp": "error",
        "react/sort-comp": "off",
        "react/sort-prop-types": "off",
        "react/style-prop-object": "off"
    }
};
