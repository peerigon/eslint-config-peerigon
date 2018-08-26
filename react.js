/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    plugins: ["react", "jsx-a11y"],
    extends: ["plugin:import/react", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
    rules: {
        /* eslint-enable sort-keys */
        // Allow certain react methods to have no this
        // See https://github.com/peerigon/eslint-config-peerigon/issues/12
        "class-methods-use-this": [
            "warn",
            {
                exceptMethods: [
                    "render",
                    "getInitialState",
                    "getDefaultProps",
                    "getChildContext",
                    "shouldComponentUpdate"
                ],
            },
        ],
        "react/boolean-prop-naming": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
        "react/button-has-type": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
        "react/default-props-match-prop-types": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
        "react/destructuring-assignment": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        "react/display-name": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
        "react/forbid-component-props": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
        "react/forbid-dom-props": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
        "react/forbid-elements": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
        "react/forbid-foreign-prop-types": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
        "react/forbid-prop-types": [
            "error",
            {
                checkChildContextTypes: true,
                checkContextTypes: true,
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        "react/jsx-boolean-value": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        "react/jsx-child-element-spacing": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
        "react/jsx-closing-bracket-location": ["error", "line-aligned"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        "react/jsx-closing-tag-location": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
        "react/jsx-curly-brace-presence": ["error", "never"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
        "react/jsx-curly-spacing": ["error", "never"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        "react/jsx-equals-spacing": ["error", "never"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
        "react/jsx-filename-extension": [
            "error",
            {
                // There's a big discussion whether the jsx/tsx is necessary:
                // - https://github.com/facebook/create-react-app/issues/87
                // - https://github.com/airbnb/javascript/pull/985
                // Since VSCode handles tsx files out-of-the-box, let's stick with the x-extensions
                extensions: [".jsx", ".tsx"],
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        "react/jsx-handler-names": [
            "error",
            {
                eventHandlerPrefix: "handle",
                eventHandlerPropPrefix: "on",
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        "react/jsx-indent": ["error", 4], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        "react/jsx-indent-props": ["error", 4], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        "react/jsx-key": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        "react/jsx-max-props-per-line": [
            "error",
            {
                maximum: 4,
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        "react/jsx-no-bind": [
            "error",
            {
                allowArrowFunctions: false,
                allowBind: false,
                ignoreRefs: false,
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        "react/jsx-no-comment-textnodes": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
        "react/jsx-no-duplicate-props": [
            "error",
            {
                ignoreCase: true,
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        "react/jsx-no-target-blank": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
        "react/jsx-no-undef": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
        "react/jsx-one-expression-per-line": [
            "error",
            {
                allow: "literal"
            }
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
        "react/jsx-pascal-case": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        "react/jsx-sort-default-props": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
        "react/jsx-sort-props": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
        "react/jsx-tag-spacing": [
            "error",
            {
                afterOpening: "never",
                beforeSelfClosing: "always",
                closingSlash: "never",
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
        "react/jsx-uses-react": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        "react/jsx-uses-vars": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        "react/jsx-wrap-multilines": [
            "error",
            {
                arrow: "parens-new-line",
                assignment: "parens-new-line",
                condition: "parens-new-line",
                declaration: "parens-new-line",
                logical: "parens-new-line",
                prop: "parens-new-line",
                return: "parens-new-line",
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        "react/no-access-state-in-setstate": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
        "react/no-array-index-key": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
        "react/no-children-prop": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
        "react/no-danger": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
        "react/no-danger-with-children": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
        "react/no-deprecated": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
        "react/no-did-mount-set-state": ["error", "disallow-in-func"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        "react/no-did-update-set-state": ["error", "disallow-in-func"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
        "react/no-direct-mutation-state": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
        "react/no-find-dom-node": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
        "react/no-is-mounted": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
        "react/no-multi-comp": ["error", { ignoreStateless: true }], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        "react/no-redundant-should-component-update": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
        "react/no-render-return-value": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
        "react/no-set-state": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
        "react/no-string-refs": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
        "react/no-this-in-sfc": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
        "react/no-typos": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
        "react/no-unescaped-entities": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
        "react/no-unknown-property": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
        "react/no-unused-prop-types": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
        "react/no-unused-state": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
        "react/no-will-update-set-state": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
        "react/prefer-es6-class": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
        "react/prefer-stateless-function": [
            "error",
            {
                ignorePureComponents: true,
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        "react/prop-types": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        "react/react-in-jsx-scope": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        "react/require-default-props": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        "react/require-optimization": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
        "react/require-render-return": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
        "react/self-closing-comp": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        "react/sort-comp": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        "react/sort-prop-types": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
        "react/style-prop-object": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
        "react/void-dom-elements-no-children": "error", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    },
};
