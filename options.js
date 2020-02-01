"use strict";

const options = {
    /* eslint-enable sort-keys */
    ["camelcase"]: {
        allow: ["^UNSAFE_"], // Allows React UNSAFE_ methods
        ignoreDestructuring: false,
        properties: "always"
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
        ignoredNodes: ["JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"],
        outerIIFEBody: 1,
    },
    ["max-lines"]: {
        max: 700,
        skipBlankLines: true,
        skipComments: true,
    },
    ["no-unused-vars"]: {
        args: "none",
        caughtErrors: "none",
        ignoreRestSiblings: true,
        vars: "all",
    },
    ["quotes"]: {
        avoidEscape: true,
    }
    /* eslint-disable sort-keys */
};

module.exports = options;
