import js from "@eslint/js";
import { globPatterns } from "../lib/glob-patterns.js";
import { ruleOptions } from "../lib/rule-options.js";

/**
 * @type {Array<import("eslint").Linter.Config>}
 */
export const base = [
  js.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
    },
  },
  {
    files: globPatterns.javascript,
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
  },
  {
    rules: {
      // Possible Problems
      // ----------------------------------------------
      "array-callback-return": "warn", // https://eslint.org/docs/latest/rules/array-callback-return
      "no-await-in-loop": "warn", // https://eslint.org/docs/latest/rules/no-await-in-loop
      "no-constructor-return": "warn", // https://eslint.org/docs/latest/rules/no-constructor-return
      "no-duplicate-imports": "warn", // https://eslint.org/docs/latest/rules/no-duplicate-imports
      "no-promise-executor-return": "warn", // https://eslint.org/docs/latest/rules/no-promise-executor-return
      "no-self-compare": "warn", // https://eslint.org/docs/latest/rules/no-self-compare
      "no-template-curly-in-string": "warn", // https://eslint.org/docs/latest/rules/no-template-curly-in-string
      "no-unmodified-loop-condition": "warn", // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
      "no-unreachable-loop": "warn", // https://eslint.org/docs/latest/rules/no-unreachable-loop
      "no-useless-assignment": "warn", // https://eslint.org/docs/latest/rules/no-useless-assignment
      "require-atomic-updates": "warn", // https://eslint.org/docs/latest/rules/require-atomic-updates

      // Suggestions
      // ----------------------------------------------
      "accessor-pairs": "warn", // https://eslint.org/docs/latest/rules/accessor-pairs
      "block-scoped-var": "warn", // https://eslint.org/docs/latest/rules/block-scoped-var
      camelcase: ["warn", ruleOptions.camelcase], // https://eslint.org/docs/latest/rules/camelcase
      "consistent-return": "warn", // https://eslint.org/docs/latest/rules/consistent-return
      "dot-notation": "warn", // https://eslint.org/docs/latest/rules/dot-notation
      eqeqeq: ["warn", "always", { null: "ignore" }], // https://eslint.org/docs/latest/rules/eqeqeq
      "func-style": ["warn", "declaration"], // https://eslint.org/docs/latest/rules/func-style
      "grouped-accessor-pairs": ["warn", "setBeforeGet"], // https://eslint.org/docs/latest/rules/grouped-accessor-pairs
      "max-depth": ["warn", 5], // https://eslint.org/docs/latest/rules/max-depth
      "max-nested-callbacks": ["warn", 3], // https://eslint.org/docs/latest/rules/max-nested-callbacks
      "max-params": ["warn", { max: 4 }], // https://eslint.org/docs/latest/rules/max-params
      "new-cap": "warn", // https://eslint.org/docs/latest/rules/new-cap
      "no-alert": "warn", // https://eslint.org/docs/latest/rules/no-alert
      "no-array-constructor": "warn", // https://eslint.org/docs/latest/rules/no-array-constructor
      "no-bitwise": "warn", // https://eslint.org/docs/latest/rules/no-bitwise
      "no-caller": "warn", // https://eslint.org/docs/latest/rules/no-caller
      "no-else-return": "warn", // https://eslint.org/docs/latest/rules/no-else-return
      "no-eval": "warn", // https://eslint.org/docs/latest/rules/no-eval
      "no-extend-native": "warn", // https://eslint.org/docs/latest/rules/no-extend-native
      "no-extra-bind": "warn", // https://eslint.org/docs/latest/rules/no-extra-bind
      "no-extra-label": "warn", // https://eslint.org/docs/latest/rules/no-extra-label
      "no-implicit-globals": "warn", // https://eslint.org/docs/latest/rules/no-implicit-globals
      "no-implied-eval": "warn", // https://eslint.org/docs/latest/rules/no-implied-eval
      "no-iterator": "warn", // https://eslint.org/docs/latest/rules/no-iterator
      "no-label-var": "warn", // https://eslint.org/docs/latest/rules/no-label-var
      "no-labels": "warn", // https://eslint.org/docs/latest/rules/no-labels
      "no-lone-blocks": "warn", // https://eslint.org/docs/latest/rules/no-lone-blocks
      "no-multi-str": "warn", // https://eslint.org/docs/latest/rules/no-multi-str
      "no-negated-condition": "warn", // https://eslint.org/docs/latest/rules/no-negated-condition
      "no-new": "warn", // https://eslint.org/docs/latest/rules/no-new
      "no-new-func": "warn", // https://eslint.org/docs/latest/rules/no-new-func
      "no-new-wrappers": "warn", // https://eslint.org/docs/latest/rules/no-new-wrappers
      "no-object-constructor": "warn", // https://eslint.org/docs/latest/rules/no-object-constructor
      "no-octal-escape": "warn", // https://eslint.org/docs/latest/rules/no-octal-escape
      "no-proto": "warn", // https://eslint.org/docs/latest/rules/no-proto
      "no-restricted-exports": [
        "warn",
        {
          restrictedNamedExports: [
            // If "then" is a function, the module will not be loadedable by an async import()
            // because it looks like a promise. The JS engine will call the .then() function in that case
            // Since this is super confusing, let's warn the user about it
            "then",
          ],
        },
      ], // https://eslint.org/docs/latest/rules/no-restricted-exports
      "no-restricted-globals": ["warn", "event"], // https://eslint.org/docs/latest/rules/no-restricted-globals
      "no-restricted-syntax": ["warn", "WithStatement"], // https://eslint.org/docs/latest/rules/no-restricted-syntax
      "no-script-url": "warn", // https://eslint.org/docs/latest/rules/no-script-url
      "no-sequences": "warn", // https://eslint.org/docs/latest/rules/no-sequences
      "no-throw-literal": "warn", // https://eslint.org/docs/latest/rules/no-throw-literal
      "no-undef-init": "warn", // https://eslint.org/docs/latest/rules/no-undef-init
      "no-unneeded-ternary": "warn", // https://eslint.org/docs/latest/rules/no-unneeded-ternary
      "no-unused-expressions": ["warn", ruleOptions["no-unused-expressions"]], // https://eslint.org/docs/latest/rules/no-unused-expressions
      "no-useless-call": "warn", // https://eslint.org/docs/latest/rules/no-useless-call
      "no-useless-computed-key": "warn", // https://eslint.org/docs/latest/rules/no-useless-computed-key
      "no-useless-concat": "warn", // https://eslint.org/docs/latest/rules/no-useless-concat
      "no-useless-constructor": "warn", // https://eslint.org/docs/latest/rules/no-useless-constructor
      "no-useless-escape": "warn", // https://eslint.org/docs/latest/rules/no-useless-escape
      "no-useless-rename": "warn", // https://eslint.org/docs/latest/rules/no-useless-rename
      "no-useless-return": "warn", // https://eslint.org/docs/latest/rules/no-useless-return
      "no-var": "warn", // https://eslint.org/docs/latest/rules/no-var
      "object-shorthand": ["warn", "always"], // https://eslint.org/docs/latest/rules/object-shorthand
      "one-var": ["warn", "never"], // https://eslint.org/docs/latest/rules/one-var
      "prefer-arrow-callback": "warn", // https://eslint.org/docs/latest/rules/prefer-arrow-callback
      "prefer-const": "warn", // https://eslint.org/docs/latest/rules/prefer-const
      "prefer-exponentiation-operator": "warn", // https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
      "prefer-numeric-literals": "warn", // https://eslint.org/docs/latest/rules/prefer-numeric-literals
      "prefer-object-has-own": "warn", // https://eslint.org/docs/latest/rules/prefer-object-has-own
      "prefer-promise-reject-errors": "warn", // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
      "prefer-regex-literals": "warn", // https://eslint.org/docs/latest/rules/prefer-regex-literals
      "prefer-rest-params": "warn", // https://eslint.org/docs/latest/rules/prefer-rest-params
      "prefer-spread": "warn", // https://eslint.org/docs/latest/rules/prefer-spread
      strict: "warn", // https://eslint.org/docs/latest/rules/strict
      "symbol-description": "warn", // https://eslint.org/docs/latest/rules/symbol-description
      yoda: ["warn", "never"], // https://eslint.org/docs/latest/rules/yoda

      // Layout & Formatting
      // ----------------------------------------------
      "unicode-bom": "warn", // https://eslint.org/docs/latest/rules/unicode-bom
    },
  },
];

export default base;
