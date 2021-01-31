/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

const options = require("./options.js");
const globPatterns = require("./glob-patterns.js");

module.exports = {
    plugins: ["@typescript-eslint"],
    overrides: [
        {
            files: globPatterns.typescript,
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                extraFileExtensions: [".vue"],
            },
            extends: [
                "plugin:import/typescript",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
            ],
            rules: {
                /* eslint-enable sort-keys */
                "@babel/no-invalid-this": "off", // covered by @typescript-eslint/no-invalid-this
                "@babel/no-unused-expressions": "off", // covered by @typescript-eslint/no-unused-expressions
                "@babel/semi": "off", // covered by @typescript-eslint/semi
                // "no-undef": "off", // produces false positive with some TypeScript syntax. This is caught by TypeScript anyway.
                "@typescript-eslint/adjacent-overload-signatures": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
                "@typescript-eslint/array-type": ["warn", {default: "generic"}], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
                "@typescript-eslint/await-thenable": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
                // Disable the warning for legimitate use cases
                "@typescript-eslint/ban-ts-comment": ["warn", {
                    "ts-expect-error": "allow-with-description"
                }], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
                "@typescript-eslint/ban-tslint-comment": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
                "@typescript-eslint/ban-types": ["warn", options["@typescript-eslint/ban-types"]], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
                "@typescript-eslint/brace-style": [
                    "warn",
                    "1tbs",
                    {
                        "allowSingleLine": false,
                    }
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
                // Handled by @typescript-eslint/naming-convention
                "@typescript-eslint/camelcase": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
                "@typescript-eslint/class-literal-property-style": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
                "@typescript-eslint/comma-spacing": ["warn", options["comma-spacing"]], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
                "@typescript-eslint/consistent-indexed-object-style": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
                "@typescript-eslint/consistent-type-assertions": [
                    "warn",
                    {
                        assertionStyle: "as",
                        // Using {} as Something can hide errors (see rule docs).
                        // It's better to declare a typed variable first.
                        objectLiteralTypeAssertions: "allow-as-parameter",
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
                "@typescript-eslint/consistent-type-definitions": ["warn", "type"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
                "@typescript-eslint/consistent-type-imports": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
                "@typescript-eslint/default-param-last": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
                "@typescript-eslint/dot-notation": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
                "@typescript-eslint/explicit-function-return-type": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
                "@typescript-eslint/explicit-member-accessibility": [
                    "warn",
                    {
                        accessibility: "no-public",
                        overrides: {
                            parameterProperties: "explicit",
                        },
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
                "@typescript-eslint/explicit-module-boundary-types": ["off", {
                    allowDirectConstAssertionInArrowFunctions: true,
                    allowHigherOrderFunctions: true,
                    allowTypedFunctionExpressions: true,
                    allowedNames: [],
                }], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
                "@typescript-eslint/func-call-spacing": ["warn"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
                "@typescript-eslint/generic-type-naming": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
                "@typescript-eslint/indent": ["warn", 4, options["indent"]], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
                "@typescript-eslint/init-declarations": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
                "@typescript-eslint/lines-between-class-members": ["warn", "always", {
                    ...options["lines-between-class-members"],
                    exceptAfterOverload: true,
                }], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
                "@typescript-eslint/member-delimiter-style": [
                    "warn",
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
                "@typescript-eslint/method-signature-style": ["warn", "property"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
                "@typescript-eslint/naming-convention": [
                    "warn",
                    ...options["@typescript-eslint/naming-convention"].defaultRules,
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
                "@typescript-eslint/no-array-constructor": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
                "@typescript-eslint/no-base-to-string": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
                "@typescript-eslint/no-confusing-non-null-assertion": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
                // There are too many false positives with this rule
                // Additionally, there are situations where you just want to pass on the returned value even
                // when it's currently annotated as 'void'
                "@typescript-eslint/no-confusing-void-expression": [
                    "off",
                    {
                        ignoreArrowShorthand: true,
                        ignoreVoidOperator: true,
                    }
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/no-confusing-void-expression.md
                "@typescript-eslint/no-dupe-class-members": ["warn"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
                "@typescript-eslint/no-duplicate-imports": ["warn"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/@typescript-eslint/no-duplicate-imports.md
                "@typescript-eslint/no-dynamic-delete": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
                "@typescript-eslint/no-empty-function": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
                "@typescript-eslint/no-empty-interface": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
                // There are situations where explicit 'any' is the most pragmatic way.
                // The appropiate use of 'any' requires human peer reviews :)
                "@typescript-eslint/no-explicit-any": [
                    "off",
                    {
                        fixToUnknown: false,
                        ignoreRestArgs: true,
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
                "@typescript-eslint/no-extra-non-null-assertion": ["warn"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
                "@typescript-eslint/no-extra-parens": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
                "@typescript-eslint/no-extraneous-class": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
                // This rule might be a good idea, but often it's ok to let the global error handler handle it
                "@typescript-eslint/no-floating-promises": ["off", {
                    ignoreVoid: true
                }], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
                "@typescript-eslint/no-for-in-array": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
                "@typescript-eslint/no-implicit-any-catch": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
                "@typescript-eslint/no-implied-eval": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
                "@typescript-eslint/no-inferrable-types": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
                "@typescript-eslint/no-invalid-this": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
                "@typescript-eslint/no-invalid-void-type": ["warn", {
                    allowAsThisParameter: true,
                    allowInGenericTypeArguments: true,
                }], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
                "@typescript-eslint/no-loop-func": ["warn"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
                "@typescript-eslint/no-loss-of-precision": ["warn"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
                "@typescript-eslint/no-magic-numbers": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
                "@typescript-eslint/no-misused-new": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
                "@typescript-eslint/no-misused-promises": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
                "@typescript-eslint/no-namespace": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
                "@typescript-eslint/no-non-null-asserted-optional-chain": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
                // Unfortunately non-null assertions are sometimes necessary
                // e.g. when working with Maps
                "@typescript-eslint/no-non-null-assertion": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
                "@typescript-eslint/no-parameter-properties": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
                "@typescript-eslint/no-redeclare": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
                "@typescript-eslint/no-require-imports": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
                "@typescript-eslint/no-shadow": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
                "@typescript-eslint/no-this-alias": [
                    "warn",
                    {
                        allowDestructuring: true,
                        allowedNames: [],
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
                // When this rule is enabled, re-throwing an unknown error becomes a problem because
                // we can't guarantee that it's going to be an error object.
                // This rule would always report a warning in this case which is annoying.
                "@typescript-eslint/no-throw-literal": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
                "@typescript-eslint/no-type-alias": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
                "@typescript-eslint/no-unnecessary-condition": ["warn", {
                    allowConstantLoopConditions: true,
                }], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
                "@typescript-eslint/no-unnecessary-qualifier": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
                "@typescript-eslint/no-unnecessary-type-arguments": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
                "@typescript-eslint/no-unnecessary-type-assertion": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
                "@typescript-eslint/no-unnecessary-type-constraint": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
                // In practice, these unsafe rules are too strict. It's ok to use 'any' within a function.
                // We decided to keep @typescript-eslint/no-unsafe-return in order to avoid that 'any'
                // leaks into the rest of the application
                "@typescript-eslint/no-unsafe-assignment": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
                "@typescript-eslint/no-unsafe-call": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
                "@typescript-eslint/no-unsafe-member-access": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
                "@typescript-eslint/no-unsafe-return": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
                "@typescript-eslint/no-unused-expressions": ["warn", options["no-unused-expressions"]], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
                "@typescript-eslint/no-unused-vars": ["warn", options["no-unused-vars"]], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
                "@typescript-eslint/no-unused-vars-experimental": "off", // https://github.com/typescript-eslint/typescript-eslint/tree/v2.19.0/packages/eslint-plugin
                // The following rules would require to sort each function (declaration and expression)
                // in a module in a specific way which seems to be impractical.
                "@typescript-eslint/no-use-before-define": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
                "@typescript-eslint/no-useless-constructor": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
                "@typescript-eslint/no-var-requires": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
                // Using the ! operator to remove the nullable type is often better because it does not
                // require refactoring if you decide to change the non-nullable type later.
                // For instance:
                // declare a: undefined | string;
                // const b = a as string; // what if we change "string" later to "number"?
                "@typescript-eslint/non-nullable-type-assertion-style": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
                "@typescript-eslint/prefer-as-const": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
                "@typescript-eslint/prefer-enum-initializers": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
                "@typescript-eslint/prefer-for-of": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
                "@typescript-eslint/prefer-function-type": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
                "@typescript-eslint/prefer-includes": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
                "@typescript-eslint/prefer-interface": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-interface.md
                // Dynamic enum members are quite rare and the problem illustrated in the readme sounds like a footgun.
                // If dynamic enums are necessary in certain cases, this rule can be disabled.
                "@typescript-eslint/prefer-literal-enum-member": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
                "@typescript-eslint/prefer-namespace-keyword": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
                "@typescript-eslint/prefer-nullish-coalescing": ["warn", {
                    ignoreConditionalTests: true,
                    ignoreMixedLogicalExpressions: true,
                }], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
                "@typescript-eslint/prefer-optional-chain": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
                // We can't activate prefer-readonly currently as we don't want to flag class properties
                // that are functions as readonly (although it would be correct).
                // Enabling prefer-readonly would require developers to write
                // private readonly someMethod = () => {};
                // which is verbose and kind of annoying.
                "@typescript-eslint/prefer-readonly": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
                "@typescript-eslint/prefer-readonly-parameter-types": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
                "@typescript-eslint/prefer-reduce-type-parameter": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
                // Sometimes it makes more sense to use .match() or maybe the global flag is added later.
                // In this case we want to prevent the developer from needing to refactor the code.
                "@typescript-eslint/prefer-regexp-exec": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
                "@typescript-eslint/prefer-string-starts-ends-with": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
                "@typescript-eslint/prefer-ts-expect-error": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
                "@typescript-eslint/promise-function-async": [
                    "warn",
                    {
                        allowAny: true,
                        allowedPromiseNames: [],
                        checkArrowFunctions: true,
                        checkFunctionDeclarations: true,
                        checkFunctionExpressions: true,
                        checkMethodDeclarations: true,
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
                "@typescript-eslint/quotes": ["warn", "double", options.quotes], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
                "@typescript-eslint/require-array-sort-compare": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
                "@typescript-eslint/require-await": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
                "@typescript-eslint/restrict-plus-operands": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
                "@typescript-eslint/restrict-template-expressions": ["off", {
                    allowBoolean: false,
                    allowNullable: false,
                    allowNumber: true,
                }], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
                "@typescript-eslint/return-await": ["warn", "in-try-catch"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
                "@typescript-eslint/semi": ["warn"], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
                "@typescript-eslint/sort-type-union-intersection-members": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
                "@typescript-eslint/space-before-function-paren": ["warn", options["space-before-function-paren"]], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
                "@typescript-eslint/strict-boolean-expressions": [
                    "off",
                    {
                        allowNullable: true,
                        allowSafe: true,
                        ignoreRhs: true,
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
                "@typescript-eslint/switch-exhaustiveness-check": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
                "@typescript-eslint/triple-slash-reference": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
                "@typescript-eslint/type-annotation-spacing": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
                "@typescript-eslint/typedef": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
                "@typescript-eslint/unbound-method": [
                    "warn",
                    {
                        ignoreStatic: true,
                    },
                ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
                "@typescript-eslint/unified-signatures": "warn", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
                "brace-style": "off", // covered by @typescript-eslint/brace-style
                "camelcase": "off", // covered by @typescript-eslint/naming-convention
                "comma-spacing": "off", // covered by @typescript-eslint/comma-spacing
                "func-call-spacing": "off", // covered by @typescript-eslint/func-call-spacing
                // There's currently a problem with this rule, see https://github.com/benmosher/eslint-plugin-import/issues/1341
                "import/export": "off", // TypeScript should catch it anyway
                "import/extensions": ["warn", "ignorePackages", {
                    "ts": "never",
                    "tsx": "never",
                }], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
                // TypeScript project have usually more imports due to types
                "import/max-dependencies": ["warn", {max: 45}],
                "import/named": "off", // TypeScript should catch it anyway
                "import/namespace": "off", // TypeScript should catch it anyway
                "import/no-duplicates": "off", // covered by @typescript-eslint/no-duplicate-imports
                "import/no-unresolved": "off", // TypeScript should catch it anyway
                "indent": "off",
                "lines-between-class-members": "off", // covered by @typescript-eslint/lines-between-class-members
                // TypeScript files tend to get longer due to types
                "max-lines": [
                    "warn",
                    {
                        ...options["max-lines"],
                        max: 1400,
                    },
                ],
                "no-dupe-class-members": "off", // covered by @typescript-eslint/no-dupe-class-members
                "no-empty-function": "off", // covered by @typescript-eslint/no-empty-function
                "no-extra-parens": "off",
                "no-loop-func": "off", // covered by @typescript-eslint/no-loop-func
                "no-loss-of-precision": "off", // covered by @typescript-eslint/no-loss-of-precision
                "no-redeclare": "off", // covered by @typescript-eslint/no-redeclare
                "no-useless-constructor": "off", // covered by @typescript-eslint/no-useless-constructor
                "quotes": "off", // covered by @typescript-eslint/quotes
                "semi": "off", // covered by @typescript-eslint/semi
                "space-before-function-paren": "off", // covered by @typescript-eslint/space-before-function-paren
            },
        },
        {
            files: ["*.d.ts"],
            rules: {
                // In d.ts files it might be necessary to merge an existing interface
                "@typescript-eslint/consistent-type-definitions": "off",
                // When someone wants to extend the typings of a third-party module, it might
                // be necessary to import the module so that TypeScript finds the typings that should be extended.
                // This is a better alternative to the triple-slash directive
                "import/no-unassigned-import": "off",
            },
        },
        {
            files: globPatterns.tests,
            rules: {
                // Type assertions are quite common in tests
                "@typescript-eslint/consistent-type-assertions": "off",
                // We allow any to be used in tests, so returning it is ok
                "@typescript-eslint/no-unsafe-return": "off",
                // chai uses these as assertions
                "@typescript-eslint/no-unused-expressions": "off",
                // Passing functions around like this can be common with mocking
                "@typescript-eslint/unbound-method": "off",
            },
        },
    ]
};
