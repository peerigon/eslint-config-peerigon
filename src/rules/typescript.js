import preferArrow from "eslint-plugin-prefer-arrow";
import tsEslint from "typescript-eslint";
import { globPatterns } from "../lib/glob-patterns.js";
import { options } from "../lib/rule-options.js";

export const typescript = tsEslint.config(
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
  {
    files: [
      globPatterns.typescript,
      globPatterns.typescriptAmbient,
      globPatterns.typescriptReact,
    ],
    plugins: {
      ["prefer-arrow"]: preferArrow,
    },
    rules: {
      "@typescript-eslint/ban-ts-comment": [
        // https://typescript-eslint.io/rules/ban-ts-comment
        "warn",
        {
          "ts-expect-error": "allow-with-description",
        },
      ],
      "@typescript-eslint/class-literal-property-style": "off", // https://typescript-eslint.io/rules/class-literal-property-style
      "@typescript-eslint/explicit-member-accessibility": [
        // https://typescript-eslint.io/rules/explicit-member-accessibility
        "warn",
        {
          accessibility: "no-public",
          overrides: {
            parameterProperties: "explicit",
          },
        },
      ],
      "@typescript-eslint/method-signature-style": ["warn", "property"], // https://typescript-eslint.io/rules/method-signature-style
      "@typescript-eslint/naming-convention": [
        // https://typescript-eslint.io/rules/naming-convention
        "warn",
        ...options["@typescript-eslint/naming-convention"].defaultRules,
      ],
      "@typescript-eslint/no-base-to-string": "off", // https://typescript-eslint.io/rules/no-base-to-string
      "@typescript-eslint/no-confusing-void-expression": [
        // https://typescript-eslint.io/rules/no-confusing-void-expression
        "off",
        {
          ignoreArrowShorthand: true,
          ignoreVoidOperator: true,
        },
      ],
      "@typescript-eslint/no-empty-function": "off", // https://typescript-eslint.io/rules/no-empty-function
      "@typescript-eslint/no-empty-interface": "off", // https://typescript-eslint.io/rules/no-empty-interface
      // `any` is sometimes useful for small and abstract functions.
      // Should only be used in isolated parts of the codebase.
      // Appropriate usage can only be checked in a PR review.
      "@typescript-eslint/no-explicit-any": [
        // https://typescript-eslint.io/rules/no-explicit-any
        "off",
        {
          fixToUnknown: false,
          ignoreRestArgs: true,
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "off", // https://typescript-eslint.io/rules/no-non-null-assertion
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off", // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
      "@typescript-eslint/no-unnecessary-qualifier": "warn", // https://typescript-eslint.io/rules/no-unnecessary-qualifier
      "@typescript-eslint/no-unsafe-argument": "off", // https://typescript-eslint.io/rules/no-unsafe-argument
      "@typescript-eslint/no-unsafe-assignment": "off", // https://typescript-eslint.io/rules/no-unsafe-assignment
      "@typescript-eslint/no-unsafe-call": "off", // https://typescript-eslint.io/rules/no-unsafe-call
      "@typescript-eslint/no-unsafe-member-access": "off", // https://typescript-eslint.io/rules/no-unsafe-member-access
      "@typescript-eslint/no-unused-expressions": [
        // https://typescript-eslint.io/rules/no-unused-expressions
        "warn",
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
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
        {
          allowBoolean: false,
          allowNullable: false,
          allowNumber: true,
        },
      ],
      "no-return-await": "off",
      "@typescript-eslint/return-await": ["warn", "in-try-catch"], // https://typescript-eslint.io/rules/return-await
      "@typescript-eslint/switch-exhaustiveness-check": "warn", // https://typescript-eslint.io/rules/switch-exhaustiveness-check
      camelcase: "off",
      "max-lines": [
        "warn",
        {
          max: 1400,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      "func-style": ["warn", "expression"], // https://eslint.org/docs/latest/rules/func-style
      "prefer-arrow/prefer-arrow-functions": [
        // https://github.com/TristonJ/eslint-plugin-prefer-arrow
        "warn",
        {
          disallowPrototype: false,
          singleReturnOnly: false,
          // We used to enforce arrow functions also for class methods (as class properties)
          // but arrow functions in sub-classes can't call their overridden counterpart
          // in their super-class, see https://stackoverflow.com/a/52823577
          classPropertiesAllowed: false,
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
