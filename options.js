"use strict";

const camelcase = {
    allow: ["^UNSAFE_"], // Allows React UNSAFE_ methods
    ignoreDestructuring: false,
    properties: "always",
};

module.exports = {
    /* eslint-enable sort-keys */
    ["camelcase"]: camelcase,
    ["comma-spacing"]: {
        after: true,
        before: false,
    },
    ["indent"]: {
        ArrayExpression: 1,
        CallExpression: {
            arguments: 1,
        },
        FunctionDeclaration: {
            body: 1,
            parameters: 1,
        },
        FunctionExpression: {
            body: 1,
            parameters: 1,
        },
        MemberExpression: 1,
        ObjectExpression: 1,
        SwitchCase: 1,
        VariableDeclarator: 1,
        // JSX nodes are handled by react/jsx-indent and should be excluded from this rule
        // See https://github.com/yannickcr/eslint-plugin-react/issues/1679#issuecomment-363908562
        ignoredNodes: [
            "JSXElement",
            "JSXElement > *",
            "JSXAttribute",
            "JSXIdentifier",
            "JSXNamespacedName",
            "JSXMemberExpression",
            "JSXSpreadAttribute",
            "JSXExpressionContainer",
            "JSXOpeningElement",
            "JSXClosingElement",
            "JSXText",
            "JSXEmptyExpression",
            "JSXSpreadChild",
        ],
        outerIIFEBody: 1,
    },
    ["lines-between-class-members"]: {
        exceptAfterSingleLine: true,
    },
    ["max-lines"]: {
        max: 700,
        skipBlankLines: true,
        skipComments: true,
    },
    ["no-unused-expressions"]: {
        allowShortCircuit: true,
        allowTernary: true,
    },
    ["no-unused-vars"]: {
        // Sometimes you want to keep the function parameters for future usage
        args: "none",
        // Handling errors doesn't always mean that you need to use the error
        caughtErrors: "none",
        // This pattern is pretty common
        ignoreRestSiblings: true,
        vars: "all",
    },
    ["quotes"]: {
        avoidEscape: true,
    },
    ["space-before-function-paren"]: {
        anonymous: "always",
        named: "never",
    },
    ["@typescript-eslint/ban-types"]: {
        types: {
            // Default options taken from https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/rules/ban-types.ts
            String: {
                message: "Use string instead",
                fixWith: "string",
            },
            Boolean: {
                message: "Use boolean instead",
                fixWith: "boolean",
            },
            Number: {
                message: "Use number instead",
                fixWith: "number",
            },
            Object: {
                message: "Use Record<string, unknown> instead",
                fixWith: "Record<string, unknown>",
            },
            Symbol: {
                message: "Use symbol instead",
                fixWith: "symbol",
            },
        },
    },
    ["@typescript-eslint/camelcase"]: {
        ...camelcase,
        genericType: "always",
    },
    ["@typescript-eslint/naming-convention"]: (() => {
        const options = {
            default: {
                format: ["camelCase", "PascalCase", "UPPER_CASE"],
                leadingUnderscore: "allow",
                selector: "default",
                trailingUnderscore: "allow",
            },
            function: {
                format: ["camelCase"],
                leadingUnderscore: "allow",
                selector: "function",
                trailingUnderscore: "allow",
            },
            parameter: {
                format: ["camelCase", "PascalCase"],
                leadingUnderscore: "allow",
                selector: "parameter",
                trailingUnderscore: "allow",
            },
            method: {
                format: ["camelCase"],
                leadingUnderscore: "allow",
                selector: "method",
                trailingUnderscore: "allow",
            },
            typeLike: {
                format: ["PascalCase"],
                leadingUnderscore: "allow",
                selector: "typeLike",
                trailingUnderscore: "allow",
            },
            enumMember: {
                format: ["PascalCase"],
                leadingUnderscore: "allow",
                selector: "enumMember",
                trailingUnderscore: "allow",
            },
        };

        // By enumerating all selectors explicitly we increase the
        // specificity of these rules.
        const escapeHatches = [
            "variable",
            "function",
            "parameter",
            "property",
            "parameterProperty",
            "method",
            "accessor",
            "enumMember",
            "class",
            "interface",
            "typeAlias",
            "enum",
            "typeParameter",
        ].map((selector) => ({
            filter: {
                match: true,
                // UNSAFE_ is a prefix used by React for all lifecycle hooks that are about to be deprecated
                regex: "^(__|UNSAFE_).+$",
            },
            format: null,
            selector,
        }));

        options.defaultRules = [...Object.values(options), ...escapeHatches];

        options.ignoreProperties = {
            selector: "property",
            format: null,
        };

        return options;
    })(),
    /* eslint-disable sort-keys */
};
