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
      "@typescript-eslint/adjacent-overload-signatures": "warn",
      "@typescript-eslint/array-type": ["warn", { default: "generic" }],
      "@typescript-eslint/await-thenable": "warn",
      "@typescript-eslint/ban-ts-comment": [
        "warn",
        { "ts-expect-error": "allow-with-description" },
      ],
      "@typescript-eslint/ban-tslint-comment": "warn",
      "@typescript-eslint/ban-types": [
        "warn",
        options["@typescript-eslint/ban-types"],
      ],
      "@typescript-eslint/class-literal-property-style": "off",
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/consistent-type-assertions": [
        "warn",
        {
          assertionStyle: "as",
          objectLiteralTypeAssertions: "allow-as-parameter",
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/explicit-member-accessibility": [
        "warn",
        {
          accessibility: "no-public",
          overrides: { parameterProperties: "explicit" },
        },
      ],
      "@typescript-eslint/func-call-spacing": ["warn"],
      "@typescript-eslint/member-delimiter-style": [
        "warn",
        {
          multiline: { delimiter: "semi", requireLast: true },
          singleline: { delimiter: "semi", requireLast: false },
        },
      ],
      "@typescript-eslint/method-signature-style": ["warn", "property"],
      "@typescript-eslint/naming-convention": [
        "warn",
        ...options["@typescript-eslint/naming-convention"].defaultRules,
      ],
      "@typescript-eslint/no-array-constructor": "warn",
      "@typescript-eslint/no-base-to-string": "off",
      "@typescript-eslint/no-confusing-non-null-assertion": "warn",
      "@typescript-eslint/no-confusing-void-expression": [
        "off",
        { ignoreArrowShorthand: true, ignoreVoidOperator: true },
      ],
      "@typescript-eslint/no-dupe-class-members": ["warn"],
      "@typescript-eslint/no-dynamic-delete": "warn",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": [
        "off",
        { fixToUnknown: false, ignoreRestArgs: true },
      ],
      "@typescript-eslint/no-extra-non-null-assertion": ["warn"],
      "@typescript-eslint/no-extraneous-class": "off",
      "@typescript-eslint/no-floating-promises": ["off", { ignoreVoid: true }],
      "@typescript-eslint/no-for-in-array": "warn",
      "@typescript-eslint/no-implied-eval": "warn",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/no-invalid-this": "warn",
      "@typescript-eslint/no-invalid-void-type": [
        "warn",
        { allowAsThisParameter: true, allowInGenericTypeArguments: true },
      ],
      "@typescript-eslint/no-loss-of-precision": ["warn"],
      "@typescript-eslint/no-misused-new": "warn",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-namespace": "warn",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-redeclare": "warn",
      "@typescript-eslint/no-this-alias": [
        "warn",
        { allowDestructuring: true, allowedNames: [] },
      ],
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
      "@typescript-eslint/no-unnecessary-condition": [
        "warn",
        { allowConstantLoopConditions: true },
      ],
      "@typescript-eslint/no-unnecessary-qualifier": "warn",
      "@typescript-eslint/no-unnecessary-type-arguments": "warn",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/no-unnecessary-type-constraint": "warn",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unused-expressions": [
        "warn",
        options["no-unused-expressions"],
      ],
      "@typescript-eslint/no-unused-vars": ["warn", options["no-unused-vars"]],
      "@typescript-eslint/no-useless-constructor": "warn",
      "@typescript-eslint/no-var-requires": "warn",
      "@typescript-eslint/non-nullable-type-assertion-style": "warn",
      "@typescript-eslint/prefer-as-const": "warn",
      "@typescript-eslint/prefer-for-of": "warn",
      "@typescript-eslint/prefer-function-type": "warn",
      "@typescript-eslint/prefer-includes": "warn",
      "@typescript-eslint/prefer-literal-enum-member": "warn",
      "@typescript-eslint/prefer-namespace-keyword": "off",
      "@typescript-eslint/prefer-nullish-coalescing": [
        "warn",
        { ignoreConditionalTests: true, ignoreMixedLogicalExpressions: true },
      ],
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/prefer-reduce-type-parameter": "warn",
      "@typescript-eslint/prefer-string-starts-ends-with": "warn",
      "@typescript-eslint/prefer-ts-expect-error": "warn",
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
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/restrict-plus-operands": "off",
      "@typescript-eslint/restrict-template-expressions": [
        "off",
        { allowBoolean: false, allowNullable: false, allowNumber: true },
      ],
      "@typescript-eslint/return-await": ["warn", "in-try-catch"],
      "@typescript-eslint/switch-exhaustiveness-check": "warn",
      "@typescript-eslint/triple-slash-reference": "warn",
      "@typescript-eslint/type-annotation-spacing": "warn",
      "@typescript-eslint/unbound-method": ["warn", { ignoreStatic: true }],
      "@typescript-eslint/unified-signatures": "warn",
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
      "@typescript-eslint/consistent-type-definitions": "off",
      // In d.ts files it's sometimes necessary to overload existing methods
      "@typescript-eslint/method-signature-style": "off",
      "@typescript-eslint/naming-convention": "off",
      // Unused vars can be common in d.ts files when declaration merging is used
      "@typescript-eslint/no-unused-vars": "off",
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
      "@typescript-eslint/consistent-type-assertions": "off",
      // Mocking often requires to mock objects with a different naming convention
      "@typescript-eslint/naming-convention": "off",
      // We allow any to be used in tests, so returning it is ok
      "@typescript-eslint/no-unsafe-return": "off",
      // chai uses these as assertions
      "@typescript-eslint/no-unused-expressions": "off",
      // It's uncommon to use async/await in Cypress tests
      // https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Commands-Are-Asynchronous
      "@typescript-eslint/promise-function-async": "off",
      // Passing functions around like this can be common with mocking
      "@typescript-eslint/unbound-method": "off",
    },
  },
);

export default typescript;
