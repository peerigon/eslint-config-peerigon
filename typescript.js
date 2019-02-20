/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

const options = require("./options.js");

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        project: "./tsconfig.json",
        tsconfigRootDir: "./",
        extraFileExtensions: [".vue"]
    },
    plugins: [
        "@typescript-eslint"
    ],
    extends: [
        "plugin:@typescript-eslint/recommended"
    ],
    settings: {
        "import/resolver": {
            "node": true,
            "typescript": true
        }
    },
    rules: {
        /* eslint-enable sort-keys */
        // "no-undef": "off", // produces false positive with some TypeScript syntax. This is caught by TypeScript anyway.
        "@typescript-eslint/adjacent-overload-signatures": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/adjacent-overload-signatures.md
        "@typescript-eslint/array-type": ["error", "generic"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
        // Disable the warning for legimitate use cases
        "@typescript-eslint/ban-ts-ignore": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
        "@typescript-eslint/ban-types": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
        "@typescript-eslint/camelcase": ["error", options["camelcase"]], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
        "@typescript-eslint/class-name-casing": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/class-name-casing.md
        "@typescript-eslint/explicit-function-return-type": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/explicit-function-return-type.md
        "@typescript-eslint/explicit-member-accessibility": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/explicit-member-accessibility.md
        "@typescript-eslint/generic-type-naming": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
        "@typescript-eslint/indent": [
            "error",
            4,
            options["indent"],
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
        // There are good reasons why interfaces should not be prefixed
        // https://stackoverflow.com/questions/31876947/confused-about-the-interface-and-class-coding-guidelines-for-typescript/41967120#comment75349088_41967120
        "@typescript-eslint/interface-name-prefix": ["error", "never"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/interface-name-prefix.md
        "@typescript-eslint/member-delimiter-style": ["error", {
            "multiline": {
                "delimiter": "comma",
                "requireLast": true
            },
            "singleline": {
                "delimiter": "comma",
                "requireLast": false
            }
        }], // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/member-delimiter-style.md
        "@typescript-eslint/member-naming": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/member-naming.md
        "@typescript-eslint/member-ordering": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/member-ordering.md
        "@typescript-eslint/no-angle-bracket-type-assertion": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/no-angle-bracket-type-assertion.md
        "@typescript-eslint/no-array-constructor": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/no-array-constructor.md
        "@typescript-eslint/no-empty-interface": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/no-empty-interface.md
        "@typescript-eslint/no-explicit-any": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/no-explicit-any.md
        "@typescript-eslint/no-extraneous-class": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
        "@typescript-eslint/no-for-in-array": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
        "@typescript-eslint/no-inferrable-types": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/no-inferrable-types.md
        "@typescript-eslint/no-misused-new": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
        "@typescript-eslint/no-namespace": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/no-namespace.md
        "@typescript-eslint/no-non-null-assertion": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/no-non-null-assertion.md
        // In an object expression, it can be beneficial to cast the object to a certain type instead of the inferred type
        // Example:
        // const options = {
        //     baseUrl: "",
        //     requestInit: {
        //         credentials: "same-origin",
        //         headers: env.defaultHeaders,
        //     } as RequestInit,
        // };
        "@typescript-eslint/no-object-literal-type-assertion": ["off", {
            allowAsParameter: false
        }], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-object-literal-type-assertion.md
        "@typescript-eslint/no-parameter-properties": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/no-parameter-properties.md
        "@typescript-eslint/no-require-imports": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
        "@typescript-eslint/no-this-alias": [
            "error",
            {
                allowDestructuring: true,
              allowedNames: [],
            },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
        "@typescript-eslint/no-triple-slash-reference": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/no-triple-slash-reference.md
        "@typescript-eslint/no-type-alias": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/no-type-alias.md
        "@typescript-eslint/no-unnecessary-qualifier": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
        "@typescript-eslint/no-unnecessary-type-assertion": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
        "@typescript-eslint/no-unused-vars": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/no-unused-vars.md
        "@typescript-eslint/no-use-before-define": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/no-use-before-define.md
        "@typescript-eslint/no-useless-constructor": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
        "@typescript-eslint/no-var-requires": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/no-var-requires.md
        "@typescript-eslint/prefer-function-type": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
        // TODO: Change to "error"
        "@typescript-eslint/prefer-interface": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-interface.md
        "@typescript-eslint/prefer-namespace-keyword": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/prefer-namespace-keyword.md
        "@typescript-eslint/promise-function-async": [
            "error",
            {
              "allowedPromiseNames": [],
              "checkArrowFunctions": true,
              "checkFunctionDeclarations": true,
              "checkFunctionExpressions": true,
              "checkMethodDeclarations": true
            }
        ], // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        "@typescript-eslint/restrict-plus-operands": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
        "@typescript-eslint/type-annotation-spacing": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/rules/type-annotation-spacing.md
        "babel/camelcase": "off",
        "indent": "off",
    },
    /* eslint-disable sort-keys */
    overrides: [
        {
            "files": [
                "**/*.js"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
}
