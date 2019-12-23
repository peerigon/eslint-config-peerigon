/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

const path = require("path");
const options = require("./options.js");
const globPatterns = require("./globPatterns.js");

let pathToTsConfig = path.resolve(__dirname, "../../tsconfig.json");

try {
    pathToTsConfig = require.resolve(pathToTsConfig);
} catch (error) {
    throw new Error(
        "Error while trying to resolve tsconfig.json at " + pathToTsConfig + ": " + error.message,
    );
}

module.exports = {
    plugins: ["@typescript-eslint"],
    // We cannot extend in overrides, so let's hope that the recommended
    // rules don't specify anything problematic for .js files.
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: pathToTsConfig,
                tsconfigRootDir: "./",
                extraFileExtensions: [".vue"],
            },
            settings: {
                "import/resolver": {
                    node: true,
                    typescript: true,
                },
            },
            rules: {
                /* eslint-enable sort-keys */
                // "no-undef": "off", // produces false positive with some TypeScript syntax. This is caught by TypeScript anyway.
                "@typescript-eslint/adjacent-overload-signatures": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
                "@typescript-eslint/array-type": ["error", {default: "generic"}], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
                "@typescript-eslint/await-thenable": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
                // Disable the warning for legimitate use cases
                "@typescript-eslint/ban-ts-ignore": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
                // Using the default options https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/rules/ban-types.ts
                "@typescript-eslint/ban-types": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
                "@typescript-eslint/camelcase": ["error", options["camelcase"]], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
                "@typescript-eslint/class-name-casing": [
                    "error",
                    {
                        allowUnderscorePrefix: true,
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-name-casing.md
                "@typescript-eslint/consistent-type-assertions": [
                    "error",
                    {
                        assertionStyle: "as",
                        // Using {} as Something can hide errors (see rule docs).
                        // It's better to declare a typed variable first.
                        objectLiteralTypeAssertions: "allow-as-parameter",
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
                "@typescript-eslint/consistent-type-definitions": ["error", "type"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
                "@typescript-eslint/explicit-function-return-type": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
                "@typescript-eslint/explicit-member-accessibility": [
                    "error",
                    {
                        accessibility: "no-public",
                        overrides: {
                            parameterProperties: "explicit",
                        },
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
                "@typescript-eslint/func-call-spacing": ["error"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
                "@typescript-eslint/generic-type-naming": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
                "@typescript-eslint/indent": ["error", 4, options["indent"]], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
                // There are good reasons why interfaces should not be prefixed
                // https://stackoverflow.com/questions/31876947/confused-about-the-interface-and-class-coding-guidelines-for-typescript/41967120#comment75349088_41967120
                "@typescript-eslint/interface-name-prefix": ["error", "never"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
                "@typescript-eslint/member-delimiter-style": [
                    "error",
                    {
                        // We're using "semi" because classes do only allow semi
                        // and we want to stay consistent with them.
                        multiline: {
                            delimiter: "semi",
                            requireLast: true,
                        },
                        singleline: {
                            delimiter: "semi",
                            requireLast: false,
                        },
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
                "@typescript-eslint/member-naming": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-naming.md
                "@typescript-eslint/member-ordering": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
                "@typescript-eslint/no-array-constructor": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
                "@typescript-eslint/no-empty-function": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
                "@typescript-eslint/no-empty-interface": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
                "@typescript-eslint/no-explicit-any": [
                    "warn",
                    {
                        fixToUnknown: true,
                        ignoreRestArgs: true,
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
                "@typescript-eslint/no-extra-parens": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
                "@typescript-eslint/no-extraneous-class": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
                // If the error should not be handled, it's ok to add
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                // This rule forces developers to think about the error case.
                "@typescript-eslint/no-floating-promises": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
                "@typescript-eslint/no-for-in-array": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
                "@typescript-eslint/no-inferrable-types": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
                "@typescript-eslint/no-magic-numbers": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
                "@typescript-eslint/no-misused-new": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
                "@typescript-eslint/no-namespace": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
                "@typescript-eslint/no-non-null-assertion": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
                "@typescript-eslint/no-parameter-properties": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
                "@typescript-eslint/no-require-imports": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
                "@typescript-eslint/no-this-alias": [
                    "error",
                    {
                        allowDestructuring: true,
                        allowedNames: [],
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
                "@typescript-eslint/no-type-alias": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
                "@typescript-eslint/no-unnecessary-qualifier": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
                "@typescript-eslint/no-unnecessary-type-arguments": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
                "@typescript-eslint/no-unnecessary-type-assertion": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
                "@typescript-eslint/no-unused-vars": ["error", options["no-unused-vars"]], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
                // The following rules would require to sort each function (declaration and expression)
                // in a module in a specific way which seems to be impractical.
                "@typescript-eslint/no-use-before-define": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
                "@typescript-eslint/no-useless-constructor": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
                "@typescript-eslint/no-var-requires": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
                "@typescript-eslint/prefer-for-of": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
                "@typescript-eslint/prefer-function-type": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
                "@typescript-eslint/prefer-includes": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
                "@typescript-eslint/prefer-interface": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-interface.md
                "@typescript-eslint/prefer-namespace-keyword": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
                // Enabling prefer-readonly would require developers to write
                // private readonly someMethod = () => {};
                // which is verbose and kind of annoying.
                "@typescript-eslint/prefer-readonly": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
                "@typescript-eslint/prefer-regexp-exec": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
                "@typescript-eslint/prefer-string-starts-ends-with": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
                "@typescript-eslint/promise-function-async": [
                    "error",
                    {
                        allowAny: true,
                        allowedPromiseNames: [],
                        checkArrowFunctions: true,
                        checkFunctionDeclarations: true,
                        checkFunctionExpressions: true,
                        checkMethodDeclarations: true,
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
                "@typescript-eslint/require-array-sort-compare": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
                "@typescript-eslint/require-await": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
                "@typescript-eslint/restrict-plus-operands": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
                "@typescript-eslint/semi": ["error"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
                "@typescript-eslint/strict-boolean-expressions": [
                    "error",
                    {
                        ignoreRhs: true,
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
                "@typescript-eslint/triple-slash-reference": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
                "@typescript-eslint/type-annotation-spacing": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
                "@typescript-eslint/typedef": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
                "@typescript-eslint/unbound-method": [
                    "error",
                    {
                        ignoreStatic: true,
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
                "@typescript-eslint/unified-signatures": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
                "babel/camelcase": "off",
                "babel/semi": "off", // covered by @typescript-eslint/semi
                "func-call-spacing": "off", // covered by @typescript-eslint/func-call-spacing
                // There's currently a problem with this rule, see https://github.com/benmosher/eslint-plugin-import/issues/1341
                "import/export": "off", // TypeScript should catch it anyway
                // TypeScript project have usually more imports due to types
                "import/max-dependencies": ["warn", {max: 35}],
                "import/named": "off", // TypeScript should catch it anyway
                "import/namespace": "off", // TypeScript should catch it anyway
                "import/no-unresolved": "off", // TypeScript should catch it anyway
                "indent": "off",
                // TypeScript files tend to get longer due to types
                "max-lines": [
                    "warn",
                    Object.assign({}, options["max-lines"], {
                        max: 600,
                    }),
                ],
                "no-empty-function": "off", // covered by @typescript-eslint/no-empty-function
                "no-useless-constructor": "off", // covered by @typescript-eslint/no-useless-constructor
                "semi": "off", // covered by @typescript-eslint/semi
            },
        },
        {
            files: ["*.d.ts"],
            rules: {
                // In d.ts files it might be necessary to merge an existing interface
                "@typescript-eslint/consistent-type-definitions": "off",
                // When someone wants to extend the typings of a third-party module, it might
                // be necessary to import the module so that TypeScript finds the typings that should be extended.
                // This is a better alternative than the triple-slash directive
                "import/no-unassigned-import": "off", // sometimes it's important to import the
                "import/unambiguous": "off", // produces false positive with some TypeScript syntax
            },
        },
        // TODO: With ESLint 6 you can pass an array of files. Change this once we've updated.
    ].concat(
        globPatterns.tests.map((testGlobPattern) => ({
            files: testGlobPattern,
            rules: {
                // The any type is ok in tests
                "@typescript-eslint/no-explicit-any": "off",
                // Passing functions around like this can be common with mocking
                "@typescript-eslint/unbound-method": "off",
            },
        })),
    ),
};
