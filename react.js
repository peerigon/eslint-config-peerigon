/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

module.exports = {
    plugins: ["react", "jsx-a11y", "react-hooks"],
    extends: [
        "plugin:import/react",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    overrides: [
        {
            files: "*.ts{,x}",
            rules: {
                "react/prop-types": "off", // We expect React components to be checked by TypeScript
            },
        },
    ],
    rules: {
        /* eslint-enable sort-keys */
        // Allow certain react methods to have no this
        // See https://github.com/peerigon/eslint-config-peerigon/issues/12
        "class-methods-use-this": [
            "off",
            {
                exceptMethods: [
                    "render",
                    "getInitialState",
                    "getDefaultProps",
                    "getChildContext",
                    "shouldComponentUpdate",
                ],
            },
        ],
        "react-hooks/exhaustive-deps": "warn", // https://www.npmjs.com/package/eslint-plugin-react-hooks
        "react-hooks/rules-of-hooks": "warn", // https://www.npmjs.com/package/eslint-plugin-react-hooks
        "react/boolean-prop-naming": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
        "react/button-has-type": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
        "react/default-props-match-prop-types": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
        "react/destructuring-assignment": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        "react/display-name": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
        "react/forbid-component-props": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
        "react/forbid-dom-props": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
        "react/forbid-elements": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
        "react/forbid-foreign-prop-types": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
        "react/forbid-prop-types": [
            "warn",
            {
                checkChildContextTypes: true,
                checkContextTypes: true,
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        "react/jsx-boolean-value": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        "react/jsx-child-element-spacing": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
        "react/jsx-closing-bracket-location": ["warn", "line-aligned"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        "react/jsx-closing-tag-location": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
        "react/jsx-curly-brace-presence": ["warn", "never"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
        "react/jsx-curly-spacing": ["warn", "never"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        "react/jsx-equals-spacing": ["warn", "never"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
        "react/jsx-filename-extension": [
            "warn",
            {
                // There's a big discussion whether the jsx/tsx is necessary:
                // - https://github.com/facebook/create-react-app/issues/87
                // - https://github.com/airbnb/javascript/pull/985
                // Since VSCode handles tsx files out-of-the-box, let's stick with the x-extensions
                extensions: [".jsx", ".tsx"],
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        "react/jsx-first-prop-new-line": ["warn", "multiline-multiprop"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        "react/jsx-handler-names": [
            "warn",
            {
                eventHandlerPrefix: "handle",
                eventHandlerPropPrefix: "on",
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        "react/jsx-indent": ["warn", 4], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        "react/jsx-indent-props": ["warn", 4], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        "react/jsx-key": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        "react/jsx-max-props-per-line": [
            "warn",
            {
                maximum: 4,
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        // See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md#protips
        "react/jsx-no-bind": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        "react/jsx-no-comment-textnodes": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
        "react/jsx-no-duplicate-props": [
            "warn",
            {
                ignoreCase: true,
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        "react/jsx-no-target-blank": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
        "react/jsx-no-undef": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md

        "react/jsx-one-expression-per-line": [
            "off", // This rule does not play well with Prettier
            {
                allow: "literal",
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
        "react/jsx-pascal-case": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        "react/jsx-sort-default-props": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
        "react/jsx-sort-props": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
        "react/jsx-tag-spacing": [
            "warn",
            {
                afterOpening: "never",
                beforeSelfClosing: "always",
                closingSlash: "never",
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
        "react/jsx-uses-react": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        "react/jsx-uses-vars": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        "react/jsx-wrap-multilines": [
            "off", // This rule does not play well with Prettier
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
        "react/no-access-state-in-setstate": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
        "react/no-array-index-key": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
        "react/no-children-prop": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
        "react/no-danger": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
        "react/no-danger-with-children": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
        "react/no-deprecated": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
        "react/no-did-mount-set-state": ["warn", "disallow-in-func"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        "react/no-did-update-set-state": ["warn", "disallow-in-func"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
        "react/no-direct-mutation-state": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
        "react/no-find-dom-node": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
        "react/no-is-mounted": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
        "react/no-multi-comp": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        "react/no-redundant-should-component-update": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
        "react/no-render-return-value": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
        "react/no-set-state": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
        "react/no-string-refs": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
        "react/no-this-in-sfc": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
        "react/no-typos": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
        "react/no-unescaped-entities": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
        "react/no-unknown-property": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
        "react/no-unused-prop-types": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
        "react/no-unused-state": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
        "react/no-will-update-set-state": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
        "react/prefer-es6-class": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
        "react/prefer-stateless-function": [
            "warn",
            {
                ignorePureComponents: true,
            },
        ], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        "react/prop-types": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        "react/react-in-jsx-scope": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        "react/require-default-props": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        "react/require-optimization": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
        "react/require-render-return": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
        "react/self-closing-comp": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        "react/sort-comp": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        "react/sort-prop-types": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
        "react/style-prop-object": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
        "react/void-dom-elements-no-children": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    },
};
