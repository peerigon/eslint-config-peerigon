import tsEslint from "typescript-eslint";
import base from "./base.js";
import { options } from "../lib/rule-options.js";
import { globPatterns } from "../lib/glob-patterns.js";

export const typescript = tsEslint.config(
  ...base,
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      "@typescript-eslint/adjacent-overload-signatures": "warn", // https://typescript-eslint.io/rules/adjacent-overload-signatures
      "@typescript-eslint/array-type": ["warn", { default: "generic" }], // https://typescript-eslint.io/rules/array-type
      "@typescript-eslint/await-thenable": "warn", // https://typescript-eslint.io/rules/await-thenable
      "@typescript-eslint/ban-ts-comment": [
        // https://typescript-eslint.io/rules/ban-ts-comment
        "warn",
        { "ts-expect-error": "allow-with-description" },
      ],
      "@typescript-eslint/ban-tslint-comment": "warn", // https://typescript-eslint.io/rules/ban-tslint-comment
      "@typescript-eslint/ban-types": [
        // https://typescript-eslint.io/rules/ban-types
        "warn",
        options["@typescript-eslint/ban-types"],
      ],
      "@typescript-eslint/class-literal-property-style": "off", // https://typescript-eslint.io/rules/class-literal-property-style
      "@typescript-eslint/consistent-indexed-object-style": "off", // https://typescript-eslint.io/rules/consistent-indexed-object-style
      "@typescript-eslint/consistent-type-assertions": [
        // https://typescript-eslint.io/rules/consistent-type-assertions
        "warn",
        {
          assertionStyle: "as",
          objectLiteralTypeAssertions: "allow-as-parameter",
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"], // https://typescript-eslint.io/rules/consistent-type-definitions
      "@typescript-eslint/dot-notation": "off", // https://typescript-eslint.io/rules/dot-notation
      "@typescript-eslint/explicit-member-accessibility": [
        // https://typescript-eslint.io/rules/explicit-member-accessibility
        "warn",
        {
          accessibility: "no-public",
          overrides: { parameterProperties: "explicit" },
        },
      ],
      "@typescript-eslint/func-call-spacing": ["warn"], // https://typescript-eslint.io/rules/func-call-spacing
      "@typescript-eslint/member-delimiter-style": [
        // https://typescript-eslint.io/rules/member-delimiter-style
        "warn",
        {
          multiline: { delimiter: "semi", requireLast: true },
          singleline: { delimiter: "semi", requireLast: false },
        },
      ],
      "@typescript-eslint/method-signature-style": ["warn", "property"], // https://typescript-eslint.io/rules/method-signature-style
      "@typescript-eslint/naming-convention": [
        // https://typescript-eslint.io/rules/naming-convention
        "warn",
        ...options["@typescript-eslint/naming-convention"].defaultRules,
      ],
      "@typescript-eslint/no-array-constructor": "warn", // https://typescript-eslint.io/rules/no-array-constructor
      "@typescript-eslint/no-base-to-string": "off", // https://typescript-eslint.io/rules/no-base-to-string
      "@typescript-eslint/no-confusing-non-null-assertion": "warn", // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
      "@typescript-eslint/no-confusing-void-expression": [
        // https://typescript-eslint.io/rules/no-confusing-void-expression
        "off",
        { ignoreArrowShorthand: true, ignoreVoidOperator: true },
      ],
      "@typescript-eslint/no-dupe-class-members": ["warn"], // https://typescript-eslint.io/rules/no-dupe-class-members
      "@typescript-eslint/no-dynamic-delete": "warn", // https://typescript-eslint.io/rules/no-dynamic-delete
      "@typescript-eslint/no-empty-function": "off", // https://typescript-eslint.io/rules/no-empty-function
      "@typescript-eslint/no-empty-interface": "off", // https://typescript-eslint.io/rules/no-empty-interface
      "@typescript-eslint/no-explicit-any": [
        // https://typescript-eslint.io/rules/no-explicit-any
        "off",
        { fixToUnknown: false, ignoreRestArgs: true },
      ],
      "@typescript-eslint/no-extra-non-null-assertion": ["warn"], // https://typescript-eslint.io/rules/no-extra-non-null-assertion
      "@typescript-eslint/no-extraneous-class": "off", // https://typescript-eslint.io/rules/no-extraneous-class
      "@typescript-eslint/no-floating-promises": ["off", { ignoreVoid: true }], // https://typescript-eslint.io/rules/no-floating-promises
      "@typescript-eslint/no-for-in-array": "warn", // https://typescript-eslint.io/rules/no-for-in-array
      "@typescript-eslint/no-implied-eval": "warn", // https://typescript-eslint.io/rules/no-implied-eval
      "@typescript-eslint/no-inferrable-types": "warn", // https://typescript-eslint.io/rules/no-inferrable-types
      "@typescript-eslint/no-invalid-this": "warn", // https://typescript-eslint.io/rules/no-invalid-this
      "@typescript-eslint/no-invalid-void-type": [
        // https://typescript-eslint.io/rules/no-invalid-void-type
        "warn",
        { allowAsThisParameter: true, allowInGenericTypeArguments: true },
      ],
      "@typescript-eslint/no-loss-of-precision": ["warn"], // https://typescript-eslint.io/rules/no-loss-of-precision
      "@typescript-eslint/no-misused-new": "warn", // https://typescript-eslint.io/rules/no-misused-new
      "@typescript-eslint/no-misused-promises": "off", // https://typescript-eslint.io/rules/no-misused-promises
      "@typescript-eslint/no-namespace": "warn", // https://typescript-eslint.io/rules/no-namespace
      "@typescript-eslint/no-non-null-asserted-optional-chain": "warn", // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
      "@typescript-eslint/no-non-null-assertion": "off", // https://typescript-eslint.io/rules/no-non-null-assertion
      "@typescript-eslint/no-redeclare": "warn", // https://typescript-eslint.io/rules/no-redeclare
      "@typescript-eslint/no-this-alias": [
        // https://typescript-eslint.io/rules/no-this-alias
        "warn",
        { allowDestructuring: true, allowedNames: [] },
      ],
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off", // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
      "@typescript-eslint/no-unnecessary-condition": [
        // https://typescript-eslint.io/rules/no-unnecessary-condition
        "warn",
        { allowConstantLoopConditions: true },
      ],
      "@typescript-eslint/no-unnecessary-qualifier": "warn", // https://typescript-eslint.io/rules/no-unnecessary-qualifier
      "@typescript-eslint/no-unnecessary-type-arguments": "warn", // https://typescript-eslint.io/rules/no-unnecessary-type-arguments
      "@typescript-eslint/no-unnecessary-type-assertion": "warn", // https://typescript-eslint.io/rules/no-unnecessary-type-assertion
      "@typescript-eslint/no-unnecessary-type-constraint": "warn", // https://typescript-eslint.io/rules/no-unnecessary-type-constraint
      "@typescript-eslint/no-unsafe-argument": "off", // https://typescript-eslint.io/rules/no-unsafe-argument
      "@typescript-eslint/no-unsafe-assignment": "off", // https://typescript-eslint.io/rules/no-unsafe-assignment
      "@typescript-eslint/no-unsafe-call": "off", // https://typescript-eslint.io/rules/no-unsafe-call
      "@typescript-eslint/no-unsafe-member-access": "off", // https://typescript-eslint.io/rules/no-unsafe-member-access
      "@typescript-eslint/no-unsafe-return": "warn", // https://typescript-eslint.io/rules/no-unsafe-return
      "@typescript-eslint/no-unused-expressions": [
        // https://typescript-eslint.io/rules/no-unused-expressions
        "warn",
        options["no-unused-expressions"],
      ],
      "@typescript-eslint/no-unused-vars": ["warn", options["no-unused-vars"]], // https://typescript-eslint.io/rules/no-unused-vars
      "@typescript-eslint/no-useless-constructor": "warn", // https://typescript-eslint.io/rules/no-useless-constructor
      "@typescript-eslint/no-var-requires": "warn", // https://typescript-eslint.io/rules/no-var-requires
      "@typescript-eslint/non-nullable-type-assertion-style": "warn", // https://typescript-eslint.io/rules/non-nullable-type-assertion-style
      "@typescript-eslint/prefer-as-const": "warn", // https://typescript-eslint.io/rules/prefer-as-const
      "@typescript-eslint/prefer-for-of": "warn", // https://typescript-eslint.io/rules/prefer-for-of
      "@typescript-eslint/prefer-function-type": "warn", // https://typescript-eslint.io/rules/prefer-function-type
      "@typescript-eslint/prefer-includes": "warn", // https://typescript-eslint.io/rules/prefer-includes
      "@typescript-eslint/prefer-literal-enum-member": "warn", // https://typescript-eslint.io/rules/prefer-literal-enum-member
      "@typescript-eslint/prefer-namespace-keyword": "off", // https://typescript-eslint.io/rules/prefer-namespace-keyword
      "@typescript-eslint/prefer-nullish-coalescing": [
        // https://typescript-eslint.io/rules/prefer-nullish-coalescing
        "warn",
        { ignoreConditionalTests: true, ignoreMixedLogicalExpressions: true },
      ],
      "@typescript-eslint/prefer-optional-chain": "warn", // https://typescript-eslint.io/rules/prefer-optional-chain
      "@typescript-eslint/prefer-reduce-type-parameter": "warn", // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
      "@typescript-eslint/prefer-string-starts-ends-with": "warn", // https://typescript-eslint.io/rules/prefer-string-starts-ends-with
      "@typescript-eslint/prefer-ts-expect-error": "warn", // https://typescript-eslint.io/rules/prefer-ts-expect-error
      "@typescript-eslint/promise-function-async": [
        // https://typescript-eslint.io/rules/promise-function-async
        "warn",
        {
          allowAny: true,
          allowedPromiseNames: [],
          checkArrowFunctions: true,
          checkFunctionDeclarations: true,
          checkFunctionExpressions: true,
          checkMethodDeclarations: true,
        },
      ],
      "@typescript-eslint/require-await": "off", // https://typescript-eslint.io/rules/require-await
      "@typescript-eslint/restrict-plus-operands": "off", // https://typescript-eslint.io/rules/restrict-plus-operands
      "@typescript-eslint/restrict-template-expressions": [
        // https://typescript-eslint.io/rules/restrict-template-expressions
        "off",
        { allowBoolean: false, allowNullable: false, allowNumber: true },
      ],
      "@typescript-eslint/return-await": ["warn", "in-try-catch"], // https://typescript-eslint.io/rules/return-await
      "@typescript-eslint/switch-exhaustiveness-check": "warn", // https://typescript-eslint.io/rules/switch-exhaustiveness-check
      "@typescript-eslint/triple-slash-reference": "warn", // https://typescript-eslint.io/rules/triple-slash-reference
      "@typescript-eslint/type-annotation-spacing": "warn", // https://typescript-eslint.io/rules/type-annotation-spacing
      "@typescript-eslint/unbound-method": ["warn", { ignoreStatic: true }], // https://typescript-eslint.io/rules/unbound-method
      "@typescript-eslint/unified-signatures": "warn", // https://typescript-eslint.io/rules/unified-signatures
      camelcase: "off",
      // TypeScript files tend to get longer due to types
      "max-lines": [
        "warn",
        {
          ...options["max-lines"],
          max: 1400,
        },
      ],
    },
  },
  {
    files: globPatterns.typescriptAmbient,
    rules: {
      // In d.ts files it might be necessary to merge an existing interface
      "@typescript-eslint/consistent-type-definitions": "off", // https://typescript-eslint.io/rules/consistent-type-definitions
      // In d.ts files it's sometimes necessary to overload existing methods
      "@typescript-eslint/method-signature-style": "off", // https://typescript-eslint.io/rules/method-signature-style
      "@typescript-eslint/naming-convention": "off", // https://typescript-eslint.io/rules/naming-convention
      // Unused vars can be common in d.ts files when declaration merging is used
      "@typescript-eslint/no-unused-vars": "off", // https://typescript-eslint.io/rules/no-unused-vars
      // Since d.ts files are used to type external modules, we can't control the coding style
      "import/no-default-export": "off",
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
      "@typescript-eslint/consistent-type-assertions": "off", // https://typescript-eslint.io/rules/consistent-type-assertions
      // Mocking often requires to mock objects with a different naming convention
      "@typescript-eslint/naming-convention": "off", // https://typescript-eslint.io/rules/naming-convention
      // We allow any to be used in tests, so returning it is ok
      "@typescript-eslint/no-unsafe-return": "off", // https://typescript-eslint.io/rules/no-unsafe-return
      // chai uses these as assertions
      "@typescript-eslint/no-unused-expressions": "off", // https://typescript-eslint.io/rules/no-unused-expressions
      // It's uncommon to use async/await in Cypress tests
      // https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Commands-Are-Asynchronous
      "@typescript-eslint/promise-function-async": "off", // https://typescript-eslint.io/rules/promise-function-async
      // Passing functions around like this can be common with mocking
      "@typescript-eslint/unbound-method": "off", // https://typescript-eslint.io/rules/unbound-method
    },
  },
);

export default typescript;
