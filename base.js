/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

const options = require("./options.js");
const globPatterns = require("./glob-patterns.js");
const tests = require("./tests.js");
const configs = require("./configs.js");

module.exports = {
    parser: "@babel/eslint-parser",
    env: {
        es6: true,
    },
    parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        // We don't require a Babel config file in our base rules since it would complain
        // for every regular JS file that the babel config is missing, even when Babel isn't used.
        // If experimental syntax is used, you can still set this to true.
        requireConfigFile: false,
    },
    plugins: [
        "@babel",
        "import",
        "optimize-regex",
        "promise",
        "no-unsafe-regex",
    ],
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:promise/recommended",
    ],
    reportUnusedDisableDirectives: true,
    rules: {
        /* eslint-enable sort-keys */
        "@babel/new-cap": "warn",
        "@babel/no-invalid-this": "warn",
        "@babel/no-unused-expressions": [
            "warn",
            options["no-unused-expressions"],
        ],
        "accessor-pairs": [
            "off",
            {
                getWithoutSet: true,
            },
        ], // http://eslint.org/docs/rules/accessor-pairs
        "array-callback-return": ["error"], // http://eslint.org/docs/rules/array-callback-return
        "arrow-body-style": "off", // http://eslint.org/docs/rules/arrow-body-style
        // https://github.com/babel/eslint-plugin-babel
        "block-scoped-var": "error", // http://eslint.org/docs/rules/block-scoped-varbrace-style
        camelcase: ["warn", options.camelcase], // http://eslint.org/docs/rules/camelcase
        "capitalized-comments": ["off"], // http://eslint.org/docs/rules/capitalized-comments
        "class-methods-use-this": ["off"], // http://eslint.org/docs/rules/class-methods-use-this
        complexity: [
            "off",
            {
                max: 12,
            },
        ], // http://eslint.org/docs/rules/complexity
        "consistent-return": "warn", // http://eslint.org/docs/rules/consistent-return
        "consistent-this": ["off", "self"], // http://eslint.org/docs/rules/consistent-this
        "constructor-super": "error", // http://eslint.org/docs/rules/constructor-super
        curly: ["warn", "all"], // http://eslint.org/docs/rules/curly
        "default-case": "off", // http://eslint.org/docs/rules/default-case
        "default-case-last": "off", // https://eslint.org/docs/rules/default-case-last
        "default-param-last": "off", // https://eslint.org/docs/rules/default-param-last
        // We don't support ES3 envs anymore, so allowKeywords: true is ok
        "dot-notation": ["warn", { allowKeywords: true }], // http://eslint.org/docs/rules/dot-notation
        eqeqeq: ["warn", "always", { null: "ignore" }], // http://eslint.org/docs/rules/eqeqeq
        "func-name-matching": ["off"], // http://eslint.org/docs/rules/func-name-matching
        "func-names": "off", // http://eslint.org/docs/rules/func-names
        "func-style": ["warn", "declaration"], // http://eslint.org/docs/rules/func-style
        "grouped-accessor-pairs": ["warn", "setBeforeGet"], // https://eslint.org/docs/rules/grouped-accessor-pairs
        "guard-for-in": "off", // http://eslint.org/docs/rules/guard-for-in
        "id-denylist": "off", // https://eslint.org/docs/rules/id-denylist
        "id-length": "off", // http://eslint.org/docs/rules/id-length
        "id-match": "off", // http://eslint.org/docs/rules/id-match
        "import/consistent-type-specifier-style": ["warn", "prefer-top-level"], // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
        "import/dynamic-import-chunkname": "off", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
        "import/exports-last": "off", // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/exports-last.md
        "import/extensions": ["warn", "ignorePackages"], // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/extensions.md
        "import/first": "warn", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/first.md
        "import/group-exports": "off", // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/group-exports.md
        "import/max-dependencies": ["off", { max: 35 }], // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
        // Is already covered by eslint rule padding-line-between-statements
        "import/newline-after-import": ["off", { count: 1 }], // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
        "import/no-absolute-path": "warn", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
        "import/no-amd": "warn", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-amd.md
        // The auto-import feature of VS Code (and probably other editors) cannot work when things are
        // exported anonymously because the editor does not know what the user wants to import.
        // By just allowing default exports with names, refactoring and auto-importing becomes easier.
        "import/no-anonymous-default-export": "warn", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
        "import/no-commonjs": "off", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
        // Currently disabled because of performance reasons :(
        "import/no-cycle": "off", // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-cycle.md
        "import/no-default-export": "off", // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-default-export.md
        // Would be nice to turn this rule on but it's rather expensive
        // and it did not report a lot in the past :(
        "import/no-deprecated": "off", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
        "import/no-duplicates": "warn", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        "import/no-dynamic-require": "warn", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
        "import/no-empty-named-blocks": "warn", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-empty-named-blocks.md
        "import/no-extraneous-dependencies": [
            "off",
            {
                devDependencies: globPatterns.tests.concat(
                    globPatterns.tooling,
                ),
                optionalDependencies: true,
                peerDependencies: false,
            },
        ], // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        "import/no-import-module-exports": "error", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md
        "import/no-internal-modules": "off", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
        "import/no-mutable-exports": "off", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
        "import/no-named-default": "warn", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
        "import/no-named-export": "off", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
        "import/no-namespace": "off", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
        "import/no-nodejs-modules": "off", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
        "import/no-relative-packages": "error", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md
        "import/no-relative-parent-imports": "off", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
        "import/no-restricted-paths": "off", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
        "import/no-self-import": "error", // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-self-import.md
        // While unassigned imports are often a bad choice, the false positive rate was just too high
        "import/no-unassigned-import": [
            "off",
            {
                allow: globPatterns.withSideEffects,
            },
        ], // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
        "import/no-unresolved": ["error", { commonjs: true }], // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        "import/no-unused-modules": "off", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
        "import/no-useless-path-segments": "warn", // currently undocumented :(, see https://github.com/import-js/eslint-plugin-import/issues/1032
        "import/no-webpack-loader-syntax": "warn", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
        "import/order": [
            "warn",
            {
                // Since we want to keep changes as small as possible we can't order "parent", "sibling" and "index".
                // Otherwise moving a file from one folder to another might impact a lot of files because
                // now all the import statements need to be updated.
                groups: ["builtin", "external", ["parent", "sibling", "index"]],
            },
        ], // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/order.md
        "import/prefer-default-export": "off", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        // This rule was just too impractical since code bases often mix commonjs modules and ecmascript modules
        "import/unambiguous": "off", // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
        "init-declarations": "off", // http://eslint.org/docs/rules/init-declarations

        "line-comment-position": "off", // http://eslint.org/docs/rules/line-comment-position
        // We don't want to enforce these operators for now as they are hard to read
        // This might change later though :)
        "logical-assignment-operators": ["off", "always"], // http://eslint.org/docs/rules/logical-assignment-operators
        "max-classes-per-file": "off", // https://eslint.org/docs/rules/max-classes-per-file
        "max-depth": ["warn", 5], // http://eslint.org/docs/rules/max-depth
        "max-lines": ["off", options["max-lines"]],
        "max-lines-per-function": "off", // https://eslint.org/docs/rules/max-lines-per-function
        "max-nested-callbacks": ["warn", 3], // http://eslint.org/docs/rules/max-nested-callbacks
        "max-params": ["warn", { max: 4 }], // http://eslint.org/docs/rules/max-params
        "max-statements": "off", // http://eslint.org/docs/rules/max-statements
        "multiline-comment-style": "off", // https://eslint.org/docs/rules/multiline-comment-style
        // Handled by babel/new-cap
        "new-cap": "off", // http://eslint.org/docs/rules/new-cap
        "no-alert": "warn", // http://eslint.org/docs/rules/no-alert
        "no-array-constructor": "warn", // http://eslint.org/docs/rules/no-array-constructor
        "no-await-in-loop": "warn", // http://eslint.org/docs/rules/no-await-in-loop
        "no-bitwise": "warn", // http://eslint.org/docs/rules/no-bitwise
        "no-caller": "warn", // http://eslint.org/docs/rules/no-caller
        "no-case-declarations": "warn", // http://eslint.org/docs/rules/no-case-declarations
        "no-class-assign": "warn", // http://eslint.org/docs/rules/no-class-assign
        "no-console": "off", // http://eslint.org/docs/rules/no-console
        "no-constant-condition": [
            "error", // "error" because this is part of "eslint:recommended"
            {
                // while (true) loops are pretty common
                checkLoops: false,
            },
        ], // http://eslint.org/docs/rules/no-constant-condition
        "no-constant-binary-expression": "warn", // http://eslint.org/docs/rules/no-constant-binary-expression
        "no-constructor-return": "warn", // https://eslint.org/docs/rules/no-constructor-return
        "no-continue": "off", // http://eslint.org/docs/rules/no-continue
        "no-delete-var": "warn", // http://eslint.org/docs/rules/no-delete-var
        "no-div-regex": "off", // http://eslint.org/docs/rules/no-div-regex
        "no-dupe-class-members": "warn", // http://eslint.org/docs/rules/no-dupe-class-members
        "no-dupe-else-if": "warn", // https://eslint.org/docs/rules/no-dupe-else-if
        // handled by import/no-duplicates
        "no-duplicate-imports": "off", // http://eslint.org/docs/rules/no-duplicate-imports
        "no-else-return": "warn", // http://eslint.org/docs/rules/no-else-return
        "no-empty": "warn", // http://eslint.org/docs/rules/no-empty
        "no-empty-function": "off", // http://eslint.org/docs/rules/no-empty-function
        "no-empty-pattern": "warn", // http://eslint.org/docs/rules/no-empty-pattern
        "no-empty-static-block": "warn", // http://eslint.org/docs/rules/no-empty-static-block
        "no-eq-null": "off", // http://eslint.org/docs/rules/no-eq-null
        "no-eval": "warn", // http://eslint.org/docs/rules/no-eval
        "no-extend-native": "warn", // http://eslint.org/docs/rules/no-extend-native
        "no-extra-bind": "warn", // http://eslint.org/docs/rules/no-extra-bind
        "no-extra-label": "warn", // http://eslint.org/docs/rules/no-extra-label
        "no-fallthrough": "warn", // http://eslint.org/docs/rules/no-fallthrough
        "no-global-assign": "warn", // http://eslint.org/docs/rules/no-global-assign
        "no-implicit-coercion": "warn", // http://eslint.org/docs/rules/no-implicit-coercion
        "no-implicit-globals": "warn", // http://eslint.org/docs/rules/no-implicit-globals
        "no-implied-eval": "warn", // http://eslint.org/docs/rules/no-implied-eval
        "no-import-assign": "warn", // https://eslint.org/docs/rules/no-import-assign
        "no-inline-comments": "off", // http://eslint.org/docs/rules/no-inline-comments
        // Handled by babel/no-invalid-this
        "no-invalid-this": "off", // http://eslint.org/docs/rules/no-invalid-this
        "no-iterator": "warn", // http://eslint.org/docs/rules/no-iterator
        "no-label-var": "warn", // http://eslint.org/docs/rules/no-label-var
        "no-labels": "warn", // http://eslint.org/docs/rules/no-labels
        "no-lone-blocks": "warn", // http://eslint.org/docs/rules/no-lone-blocks
        // Lonely ifs can sometimes be a stylistic choice when the nested condition
        // is completely unrelated to the first condition
        "no-lonely-if": "off", // http://eslint.org/docs/rules/no-lonely-if
        // With let and const this is not an issue anymore
        "no-loop-func": "off", // http://eslint.org/docs/rules/no-loop-func
        "no-loss-of-precision": "error", // https://eslint.org/docs/rules/no-loss-of-precision
        "no-magic-numbers": [
            "off",
            {
                // These settings are currently unused, but we may re-use them once we decide to have that rule again.
                ignore: [
                    // digits are ok
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                    // multiplications of 10
                    -1, -10, -100, -1000, 10, 100, 1000,
                    // bytes
                    16, 32, 64, 128, 256, 512, 1024,
                    // time
                    60, 24, 365,
                    // ports
                    80, 443, 1337, 3000, 8080,
                ],
                ignoreArrayIndexes: true, // using array indexes is not a good style, but we don't want to be too strict about that
            },
        ], // http://eslint.org/docs/rules/no-magic-numbers
        "no-multi-assign": "off", // http://eslint.org/docs/rules/no-multi-assign
        "no-multi-str": "warn", // http://eslint.org/docs/rules/no-multi-str
        "no-negated-condition": "warn", // http://eslint.org/docs/rules/no-negated-condition
        "no-nested-ternary": "off", // http://eslint.org/docs/rules/no-nested-ternary
        "no-new": "warn", // http://eslint.org/docs/rules/no-new
        "no-new-func": "warn", // http://eslint.org/docs/rules/no-new-func
        "no-new-native-nonconstructor": "warn", // http://eslint.org/docs/rules/no-new-native-nonconstructor
        "no-new-symbol": "warn", // http://eslint.org/docs/rules/no-new-symbol
        "no-new-wrappers": "warn", // http://eslint.org/docs/rules/no-new-wrappers
        "no-nonoctal-decimal-escape": "error", // http://eslint.org/docs/rules/no-nonoctal-decimal-escape
        "no-object-constructor": "warn", // http://eslint.org/docs/rules/no-object-constructor
        "no-octal": "warn", // http://eslint.org/docs/rules/no-octal
        "no-octal-escape": "warn", // http://eslint.org/docs/rules/no-octal-escape
        "no-param-reassign": "off", // http://eslint.org/docs/rules/no-param-reassign
        "no-plusplus": "off", // http://eslint.org/docs/rules/no-plusplus
        // The rule reported
        // await new Promise((resolve) => setTimeout(resolve, 0))
        // which is pretty common.
        // Maybe there's an exception for one-liners now?
        "no-promise-executor-return": "off", // http://eslint.org/docs/rules/no-promise-executor-return
        "no-proto": "warn", // http://eslint.org/docs/rules/no-proto
        "no-redeclare": "warn", // http://eslint.org/docs/rules/no-redeclare
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
        ], // http://eslint.org/docs/rules/no-restricted-exports
        "no-restricted-globals": ["warn", "event"], // http://eslint.org/docs/rules/no-restricted-globals
        "no-restricted-imports": "off", // http://eslint.org/docs/rules/no-restricted-imports
        "no-restricted-properties": "off", // http://eslint.org/docs/rules/no-restricted-properties
        "no-restricted-syntax": ["warn", "WithStatement"], // http://eslint.org/docs/rules/no-restricted-syntax
        "no-return-assign": ["warn", "except-parens"], // http://eslint.org/docs/rules/no-return-assign
        // We actually want a rule that enforces to *always use return await*.
        // Reasoning: Putting try/catch around a return without await is a footgun.
        // try {
        //     return somethingAsync();
        // } catch (error) { <-- will never be caught
        // }
        // Further discussions:
        // - https://github.com/eslint/eslint/issues/12246
        // - https://github.com/standard/eslint-config-standard-with-typescript/pull/206
        // - https://github.com/typescript-eslint/typescript-eslint/issues/1378
        "no-script-url": "warn", // http://eslint.org/docs/rules/no-script-url
        "no-self-assign": "warn", // http://eslint.org/docs/rules/no-self-assign
        "no-self-compare": "warn", // http://eslint.org/docs/rules/no-self-compare
        "no-sequences": "warn", // http://eslint.org/docs/rules/no-sequences
        "no-setter-return": "warn", // https://eslint.org/docs/rules/no-setter-return
        "no-shadow": "off", // http://eslint.org/docs/rules/no-shadow
        "no-shadow-restricted-names": "warn", // http://eslint.org/docs/rules/no-shadow-restricted-names
        "no-template-curly-in-string": "warn", // http://eslint.org/docs/rules/no-template-curly-in-string
        "no-ternary": "off", // eslint.org/docs/rules/no-ternary
        "no-this-before-super": "warn", // http://eslint.org/docs/rules/no-this-before-super
        "no-throw-literal": "warn", // http://eslint.org/docs/rules/no-throw-literal
        "no-undef": [
            "warn",
            {
                typeof: false,
            },
        ], // http://eslint.org/docs/rules/no-undef
        "no-undef-init": "warn", // http://eslint.org/docs/rules/no-undef-init
        // Since we disallow shadowing of undefined, it is safe to turn this rule off
        "no-undefined": "off", // http://eslint.org/docs/rules/no-undefined
        "no-underscore-dangle": "off", // http://eslint.org/docs/rules/no-underscore-dangle
        "no-unexpected-multiline": "warn", // http://eslint.org/docs/rules/no-unexpected-multiline
        "no-unmodified-loop-condition": "warn", // http://eslint.org/docs/rules/no-unmodified-loop-condition
        "no-unneeded-ternary": "warn", // http://eslint.org/docs/rules/no-unneeded-ternary
        "no-unreachable-loop": "warn", // http://eslint.org/docs/rules/no-unreachable-loop
        "no-unsafe-optional-chaining": "error", // http://eslint.org/docs/rules/no-unsafe-optional-chaining
        "no-unsafe-regex/no-unsafe-regex": "warn", // https://github.com/kgryte/eslint-plugin-no-unsafe-regex
        // Handled by babel/no-unused-expressions
        "no-unused-expressions": ["off", options["no-unused-expressions"]], // http://eslint.org/docs/rules/no-unused-expressions
        "no-unused-labels": "warn", // http://eslint.org/docs/rules/no-unused-labels
        "no-unused-private-class-members": "warn", // http://eslint.org/docs/rules/no-unused-private-class-members
        "no-unused-vars": ["warn", options["no-unused-vars"]], // http://eslint.org/docs/rules/no-unused-vars
        "no-use-before-define": "off", // http://eslint.org/docs/rules/no-use-before-define
        "no-useless-backreference": "error", // http://eslint.org/docs/rules/no-useless-backreference
        "no-useless-call": "warn", // http://eslint.org/docs/rules/no-useless-call
        "no-useless-computed-key": "warn", // http://eslint.org/docs/rules/no-useless-computed-key
        "no-useless-concat": "warn", // http://eslint.org/docs/rules/no-useless-concat
        "no-useless-constructor": "warn", // http://eslint.org/docs/rules/no-useless-constructor
        "no-useless-escape": "warn", // http://eslint.org/docs/rules/no-useless-escape
        "no-useless-rename": "warn", // http://eslint.org/docs/rules/no-useless-rename
        "no-useless-return": "warn", // http://eslint.org/docs/rules/no-useless-return
        "no-var": "warn", // http://eslint.org/docs/rules/no-var
        "no-void": "off", // http://eslint.org/docs/rules/no-void
        "no-warning-comments": [
            "off",
            {
                location: "anywhere",
                terms: ["todo", "fixme", "quickfix"],
            },
        ], // http://eslint.org/docs/rules/no-warning-comments
        "no-with": "warn", // http://eslint.org/docs/rules/no-with
        "object-shorthand": ["warn", "always"], // http://eslint.org/docs/rules/object-shorthand
        "one-var": ["warn", "never"], // http://eslint.org/docs/rules/one-var
        "operator-assignment": ["off", "always"], // http://eslint.org/docs/rules/operator-assignment
        "optimize-regex/optimize-regex": "warn",
        "prefer-arrow-callback": "warn", // http://eslint.org/docs/rules/prefer-arrow-callback
        "prefer-const": "warn", // http://eslint.org/docs/rules/prefer-const
        "prefer-destructuring": "off", // http://eslint.org/docs/rules/prefer-destructuring
        "prefer-exponentiation-operator": "warn", // https://eslint.org/docs/rules/prefer-exponentiation-operator
        "prefer-named-capture-group": "off", // https://eslint.org/docs/rules/prefer-named-capture-group
        "prefer-numeric-literals": "warn", // http://eslint.org/docs/rules/prefer-numeric-literals
        "prefer-object-has-own": "warn", // https://eslint.org/docs/rules/prefer-object-has-own
        "prefer-object-spread": "off", // https://eslint.org/docs/rules/prefer-object-spread
        "prefer-promise-reject-errors": "warn", // http://eslint.org/docs/rules/prefer-promise-reject-errors
        "prefer-regex-literals": "warn", // https://eslint.org/docs/rules/prefer-regex-literals
        "prefer-rest-params": "warn", // http://eslint.org/docs/rules/prefer-rest-params
        "prefer-spread": "warn", // http://eslint.org/docs/rules/prefer-spread
        // Using regular string concatentation can sometimes be easier to read
        // We leave it up to the developer to decide
        "prefer-template": "off", // http://eslint.org/docs/rules/prefer-template
        "promise/always-return": "off", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return.md
        "promise/avoid-new": "off", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/avoid-new.md
        "promise/catch-or-return": ["off", { allowFinally: true }], // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return.md
        "promise/no-callback-in-promise": "warn", // https://github.com/xjamundx/eslint-plugin-promise
        "promise/no-multiple-resolved": "warn", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-multiple-resolved.md
        "promise/no-native": "off", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-native.md
        // Nesting is rarely necessary and often the sign of confusing code.
        // You can often simplify it, see https://github.com/xjamundx/eslint-plugin-promise/issues/42
        // In rare cases where nesting is desired, disable this rule.
        "promise/no-nesting": "warn", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-nesting.md
        "promise/no-new-statics": "warn", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md
        "promise/no-promise-in-callback": "warn", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-promise-in-callback.md
        "promise/no-return-in-finally": "warn", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-in-finally.md
        "promise/no-return-wrap": "warn", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-wrap.md
        "promise/param-names": "warn", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/param-names.md
        "promise/prefer-await-to-callbacks": "off", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-callbacks.md
        "promise/prefer-await-to-then": "off", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-then.md
        "promise/valid-params": "warn", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/valid-params.md
        radix: "off", // http://eslint.org/docs/rules/radix
        // This rule would be nice but there are too many false positives :(
        "require-atomic-updates": "off", // https://eslint.org/docs/rules/require-atomic-updates
        "require-await": "off", // http://eslint.org/docs/rules/require-await
        // We would like to use this rule but there is currently a bug that would show
        // an ESLint error at a lot of RegExp, like /\./u
        // See https://github.com/DmitrySoshnikov/regexp-tree/issues/162
        // TODO: Enables this rule once the issue gets addressed
        "require-unicode-regexp": "off", // https://eslint.org/docs/rules/require-unicode-regexp
        "require-yield": "off", // http://eslint.org/docs/rules/require-yield
        // Handled by babel/semi
        semi: "off", // http://eslint.org/docs/rules/semisemi-style
        "sort-imports": "off", // http://eslint.org/docs/rules/sort-imports
        "sort-keys": "off", // http://eslint.org/docs/rules/sort-keys
        "sort-vars": "off", // http://eslint.org/docs/rules/sort-vars
        strict: "warn", // http://eslint.org/docs/rules/strict
        "symbol-description": "warn", // http://eslint.org/docs/rules/symbol-description
        "unicode-bom": ["warn", "never"], // http://eslint.org/docs/rules/unicode-bom
        "valid-typeof": "error", // http://eslint.org/docs/rules/valid-typeof
        "vars-on-top": "warn", // http://eslint.org/docs/rules/vars-on-top
        yoda: ["warn", "never"], // http://eslint.org/docs/rules/yoda
        /* eslint-disable sort-keys */
    },
    overrides: [
        {
            files: globPatterns.tests,
            ...tests,
        },
        {
            files: globPatterns.configs,
            ...configs,
        },
    ],
};
