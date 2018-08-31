/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    parser: "babel-eslint",
    env: {
        es6: true,
    },
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2018
    },
    plugins: [
        "jsdoc",
        "import",
        "optimize-regex",
        "array-func",
        "promise",
        "babel",
        "no-unsafe-regex"
    ],
    extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:array-func/recommended",
        "plugin:promise/recommended"
    ],
    rules: {
        /* eslint-enable sort-keys */
        "accessor-pairs": [
            "warn",
            {
                getWithoutSet: true,
            },
        ], // http://eslint.org/docs/rules/accessor-pairs
        "array-bracket-newline": [
            "error",
            {
                multiline: true,
            },
        ], // http://eslint.org/docs/rules/array-bracket-newline
        "array-bracket-spacing": ["error", "never"], // http://eslint.org/docs/rules/array-bracket-spacing
        "array-callback-return": ["warn"], // http://eslint.org/docs/rules/array-callback-return
        "array-element-newline": "off", // http://eslint.org/docs/rules/array-element-newline
        "array-func/prefer-array-from": "off", // https://github.com/freaktechnik/eslint-plugin-array-func
        "arrow-body-style": ["error", "as-needed"], // http://eslint.org/docs/rules/arrow-body-style
        "arrow-parens": ["error", "as-needed"], // http://eslint.org/docs/rules/arrow-parens
        "arrow-spacing": [
            "error",
            {
                after: true,
                before: true,
            },
        ], // http://eslint.org/docs/rules/arrow-spacing
        // https://github.com/babel/eslint-plugin-babel
        "babel/new-cap": "error",
        "babel/no-invalid-this": "error",
        "babel/no-unused-expressions": [
            "error",
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        "babel/object-curly-spacing": ["error", "never"],
        "babel/quotes": ["error", "double", "avoid-escape"],
        "babel/semi": "error",
        "block-scoped-var": "error", // http://eslint.org/docs/rules/block-scoped-var
        "block-spacing": "error", // http://eslint.org/docs/rules/block-spacing
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": false,
            },
        ], // http://eslint.org/docs/rules/brace-style
        "callback-return": "warn", // http://eslint.org/docs/rules/callback-return
        "camelcase": ["error", {properties: "always"}], // http://eslint.org/docs/rules/camelcase
        "capitalized-comments": ["off"], // http://eslint.org/docs/rules/capitalized-comments
        "class-methods-use-this": ["warn"], // http://eslint.org/docs/rules/class-methods-use-this
        "comma-dangle": [
            "error",
            {
                arrays: "always-multiline",
                exports: "always-multiline",
                functions: "ignore",
                imports: "always-multiline",
                objects: "always-multiline",
            },
        ], // http://eslint.org/docs/rules/comma-dangle
        "comma-spacing": [
            "error",
            {
                after: true,
                before: false,
            },
        ], // http://eslint.org/docs/rules/comma-spacing
        "comma-style": ["error", "last"], // http://eslint.org/docs/rules/comma-style
        "complexity": [
            "warn",
            {
                max: 8,
            },
        ], // http://eslint.org/docs/rules/complexity
        "computed-property-spacing": ["error", "never"], // http://eslint.org/docs/rules/computed-property-spacing
        "consistent-return": "warn", // http://eslint.org/docs/rules/consistent-return
        "consistent-this": ["off", "self"], // http://eslint.org/docs/rules/consistent-this
        "constructor-super": "error", // http://eslint.org/docs/rules/constructor-super
        "curly": ["error", "all"], // http://eslint.org/docs/rules/curly
        "default-case": "off", // http://eslint.org/docs/rules/default-case
        "dot-location": ["error", "property"], // http://eslint.org/docs/rules/dot-location
        // We don't support ES3 envs anymore, so allowKeywords: true is ok
        "dot-notation": ["error", {allowKeywords: true}], // http://eslint.org/docs/rules/dot-notation
        "eol-last": ["error", "always"], // http://eslint.org/docs/rules/eol-last
        "eqeqeq": ["warn", "always"], // http://eslint.org/docs/rules/eqeqeq
        "for-direction": "error", // http://eslint.org/docs/rules/for-direction
        "func-call-spacing": ["error", "never"], // http://eslint.org/docs/rules/func-call-spacing
        "func-name-matching": ["off"], // http://eslint.org/docs/rules/func-name-matching
        "func-names": "off", // http://eslint.org/docs/rules/func-names
        "func-style": ["error", "declaration"], // http://eslint.org/docs/rules/func-style
        "generator-star-spacing": [
            "error",
            {
                after: true,
                before: false,
            },
        ], // http://eslint.org/docs/rules/generator-star-spacing
        "global-require": "off", // http://eslint.org/docs/rules/global-require
        "guard-for-in": "warn", // http://eslint.org/docs/rules/guard-for-in
        "handle-callback-err": ["error", "^(err|error)$"], // http://eslint.org/docs/rules/handle-callback-err
        "id-blacklist": ["off"], // http://eslint.org/docs/rules/id-blacklist
        "id-length": [
            "warn",
            {
                max: 40,
                min: 0,
            },
        ], // http://eslint.org/docs/rules/id-length
        "id-match": "off", // http://eslint.org/docs/rules/id-match
        "import/default": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
        "import/dynamic-import-chunkname": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
        "import/export": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
        "import/exports-last": "off", // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/exports-last.md
        "import/extensions": ["error", "ignorePackages"], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        "import/first": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
        "import/group-exports": "off", // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/group-exports.md
        // Using more than 15 dependencies in one module is a sign that this module is doing too much.
        // You should consider splitting that module into different parts.
        "import/max-dependencies": ["warn", {max: 15}], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
        "import/named": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
        "import/namespace": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
        // Is already covered by eslint rule padding-line-between-statements
        "import/newline-after-import": ["off", {count: 1}], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
        "import/no-absolute-path": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
        "import/no-amd": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
        // The auto-import feature of VS Code (and probably other editors) cannot work when things are
        // exported anonymously because the editor does not know what the user wants to import.
        // By just allowing default exports with names, refactoring and auto-importing becomes easier.
        "import/no-anonymous-default-export": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
        "import/no-commonjs": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
        // Dependency cycles are usually the sign of a problematic architecture and may also
        // have odd execution behavior where values are unexpectedly undefined.
        // There are rare situations where dependency cycles are wanted or necessary.
        // Disable this rule if you're sure that the cyclic dependency is a good idea.
        "import/no-cycle": "warn", // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-cycle.md
        "import/no-default-export": "off", // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-default-export.md
        "import/no-deprecated": "warn", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
        "import/no-duplicates": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        "import/no-dynamic-require": "warn", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: [
                    "test{,s}/**", "config{,s}/**", "script{,s}/**", // contains usually npm scripts
                    "tool{,s}/**", // often used for other scripts
                    "**/*.test.js", "**/*.spec.js", "**/type{,s}.js",
                ],
                optionalDependencies: true,
                peerDependencies: false,
            },
        ], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        "import/no-internal-modules": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
        "import/no-mutable-exports": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
        "import/no-named-as-default": "warn", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
        "import/no-named-as-default-member": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
        "import/no-named-default": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
        "import/no-namespace": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
        "import/no-nodejs-modules": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
        "import/no-relative-parent-imports": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
        "import/no-restricted-paths": [
            "warn",
            {
                zones: [
                    {
                        from: "./app/server",
                        target: "./app/client",
                    },
                    {
                        from: "./app/client",
                        target: "./app/server",
                    },
                    {
                        from: "./test",
                        target: "./app",
                    },
                    {
                        from: "./src/server",
                        target: "./src/client",
                    },
                    {
                        from: "./src/client",
                        target: "./src/server",
                    },
                    {
                        from: "./test",
                        target: "./src",
                    },
                ],
            },
        ], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
        "import/no-self-import": "error", // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-self-import.md
        "import/no-unassigned-import": ["warn", {
            allow: [
                "**/*.css",
                "**/*.less",
                "**/*.scss",
                "**/*.sass",
                "babel-register",
                "@babel/register",
                "**/polyfills*",
                "ts-node/register*"
            ]
        }], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
        "import/no-unresolved": ["warn", {commonjs: true}], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        "import/no-useless-path-segments": "error", // currently undocumented :(, see https://github.com/benmosher/eslint-plugin-import/issues/1032
        "import/no-webpack-loader-syntax": "warn", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
        "import/order": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        "import/prefer-default-export": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        "import/unambiguous": "warn", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
        "indent": [
            "error",
            4,
            {
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
        ], // http://eslint.org/docs/rules/indent
        "init-declarations": "off", // http://eslint.org/docs/rules/init-declarations
        // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/README.md
        "jsdoc/check-param-names": "error",
        "jsdoc/check-tag-names": "error",
        "jsdoc/check-types": "error",
        "jsdoc/newline-after-description": "error",
        "jsdoc/no-undefined-types": "error",
        "jsdoc/require-description-complete-sentence": "off",
        "jsdoc/require-example": "off",
        "jsdoc/require-hyphen-before-param-description": "error",
        "jsdoc/require-param": "error",
        "jsdoc/require-param-description": "off",
        "jsdoc/require-param-name": "off",
        "jsdoc/require-param-type": "error",
        "jsdoc/require-returns-description": "off",
        "jsdoc/require-returns-type": "error",
        "jsdoc/valid-types": "error",
        "jsx-quotes": ["error", "prefer-double"], // http://eslint.org/docs/rules/jsx-quotes
        "key-spacing": [
            "error",
            {
                afterColon: true,
                beforeColon: false,
            },
        ], // http://eslint.org/docs/rules/key-spacing
        "keyword-spacing": ["error"], // http://eslint.org/docs/rules/keyword-spacing
        "line-comment-position": "off", // http://eslint.org/docs/rules/line-comment-position
        "linebreak-style": ["off", "unix"], // http://eslint.org/docs/rules/linebreak-style
        "lines-around-comment": "off", // http://eslint.org/docs/rules/lines-around-comment
        "max-depth": ["warn", 4], // http://eslint.org/docs/rules/max-depth
        "max-len": [
            "warn",
            {
                code: 120,
                comments: 120,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                tabWidth: 4,
            },
        ], // http://eslint.org/docs/rules/max-len
        "max-lines": [
            "warn",
            {
                max: 300,
                skipBlankLines: true,
                skipComments: true,
            },
        ],
        "max-nested-callbacks": ["warn", 3], // http://eslint.org/docs/rules/max-nested-callbacks
        "max-params": ["warn", {max: 4}], // http://eslint.org/docs/rules/max-params
        "max-statements": "off", // http://eslint.org/docs/rules/max-statements
        "max-statements-per-line": ["error", {max: 1}], // http://eslint.org/docs/rules/max-statements-per-line
        "multiline-ternary": ["error", "always-multiline"], // http://eslint.org/docs/rules/multiline-ternary
        // Handled by babel/new-cap
        "new-cap": "off", // http://eslint.org/docs/rules/new-cap
        "new-parens": "error", // http://eslint.org/docs/rules/new-parens
        "newline-per-chained-call": "error", // http://eslint.org/docs/rules/newline-per-chained-call
        "no-alert": "warn", // http://eslint.org/docs/rules/no-alert
        "no-array-constructor": "error", // http://eslint.org/docs/rules/no-array-constructor
        "no-await-in-loop": "warn", // http://eslint.org/docs/rules/no-await-in-loop
        "no-bitwise": "error", // http://eslint.org/docs/rules/no-bitwise
        "no-buffer-constructor": "error", // http://eslint.org/docs/rules/no-buffer-constructor
        "no-caller": "error", // http://eslint.org/docs/rules/no-caller
        "no-case-declarations": "error", // http://eslint.org/docs/rules/no-case-declarations
        "no-catch-shadow": "off", // http://eslint.org/docs/rules/no-catch-shadow
        "no-class-assign": "error", // http://eslint.org/docs/rules/no-class-assign
        "no-cond-assign": ["error", "except-parens"], // http://eslint.org/docs/rules/no-cond-assign
        "no-confusing-arrow": ["off", {allowParens: true}], // http://eslint.org/docs/rules/no-confusing-arrow
        "no-console": "off", // http://eslint.org/docs/rules/no-console
        "no-const-assign": "error", // http://eslint.org/docs/rules/no-const-assign
        "no-constant-condition": "error", // http://eslint.org/docs/rules/no-constant-condition
        "no-continue": "off", // http://eslint.org/docs/rules/no-continue
        "no-control-regex": "error", // http://eslint.org/docs/rules/no-control-regex
        "no-debugger": "error", // http://eslint.org/docs/rules/no-debugger
        "no-delete-var": "error", // http://eslint.org/docs/rules/no-delete-var
        "no-div-regex": "off", // http://eslint.org/docs/rules/no-div-regex
        "no-dupe-args": "error", // http://eslint.org/docs/rules/no-dupe-args
        "no-dupe-class-members": "error", // http://eslint.org/docs/rules/no-dupe-class-members
        "no-dupe-keys": "error", // http://eslint.org/docs/rules/no-dupe-keys
        "no-duplicate-case": "error", // http://eslint.org/docs/rules/no-duplicate-case
        // handled by import/no-duplicates
        "no-duplicate-imports": "off", // http://eslint.org/docs/rules/no-duplicate-imports
        "no-else-return": "error", // http://eslint.org/docs/rules/no-else-return
        "no-empty": "error", // http://eslint.org/docs/rules/no-empty
        "no-empty-character-class": "error", // http://eslint.org/docs/rules/no-empty-character-class
        "no-empty-function": "off", // http://eslint.org/docs/rules/no-empty-function
        "no-empty-pattern": "error", // http://eslint.org/docs/rules/no-empty-pattern
        "no-eq-null": "error", // http://eslint.org/docs/rules/no-eq-null
        "no-eval": "error", // http://eslint.org/docs/rules/no-eval
        "no-ex-assign": "error", // http://eslint.org/docs/rules/no-ex-assign
        "no-extend-native": "error", // http://eslint.org/docs/rules/no-extend-native
        "no-extra-bind": "error", // http://eslint.org/docs/rules/no-extra-bind
        "no-extra-boolean-cast": "error", // http://eslint.org/docs/rules/no-extra-boolean-cast
        "no-extra-label": "error", // http://eslint.org/docs/rules/no-extra-label
        "no-extra-parens": "off", // http://eslint.org/docs/rules/no-extra-parens
        "no-extra-semi": "error", // http://eslint.org/docs/rules/no-extra-semi
        "no-fallthrough": "error", // http://eslint.org/docs/rules/no-fallthrough
        "no-floating-decimal": "error", // http://eslint.org/docs/rules/no-floating-decimal
        "no-func-assign": "error", // http://eslint.org/docs/rules/no-func-assign
        "no-global-assign": "error", // http://eslint.org/docs/rules/no-global-assign
        "no-implicit-coercion": "error", // http://eslint.org/docs/rules/no-implicit-coercion
        "no-implicit-globals": "error", // http://eslint.org/docs/rules/no-implicit-globals
        "no-implied-eval": "error", // http://eslint.org/docs/rules/no-implied-eval
        "no-inline-comments": "off", // http://eslint.org/docs/rules/no-inline-comments
        "no-inner-declarations": ["error", "functions"], // http://eslint.org/docs/rules/no-inner-declarations
        "no-invalid-regexp": "error", // http://eslint.org/docs/rules/no-invalid-regexp
        // Handled by babel/no-invalid-this
        "no-invalid-this": "off", // http://eslint.org/docs/rules/no-invalid-this
        "no-irregular-whitespace": "error", // http://eslint.org/docs/rules/no-irregular-whitespace
        "no-iterator": "error", // http://eslint.org/docs/rules/no-iterator
        "no-label-var": "error", // http://eslint.org/docs/rules/no-label-var
        "no-labels": "error", // http://eslint.org/docs/rules/no-labels
        "no-lone-blocks": "error", // http://eslint.org/docs/rules/no-lone-blocks
        "no-lonely-if": "error", // http://eslint.org/docs/rules/no-lonely-if
        "no-loop-func": "warn", // http://eslint.org/docs/rules/no-loop-func
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
        "no-mixed-operators": "error", // http://eslint.org/docs/rules/no-mixed-operators
        "no-mixed-requires": [
            "error",
            {
                allowCall: true,
                grouping: false,
            },
        ], // http://eslint.org/docs/rules/no-mixed-requires
        "no-mixed-spaces-and-tabs": ["error", false], // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
        "no-multi-assign": "off", // http://eslint.org/docs/rules/no-multi-assign
        "no-multi-spaces": "error", // http://eslint.org/docs/rules/no-multi-spaces
        "no-multi-str": "error", // http://eslint.org/docs/rules/no-multi-str
        "no-multiple-empty-lines": ["error", {max: 1}], // http://eslint.org/docs/rules/no-multiple-empty-lines
        "no-negated-condition": "error", // http://eslint.org/docs/rules/no-negated-condition
        "no-nested-ternary": "off", // http://eslint.org/docs/rules/no-nested-ternary
        "no-new": "error", // http://eslint.org/docs/rules/no-new
        "no-new-func": "error", // http://eslint.org/docs/rules/no-new-func
        "no-new-object": "error", // http://eslint.org/docs/rules/no-new-object
        "no-new-require": "error", // http://eslint.org/docs/rules/no-new-require
        "no-new-symbol": "error", // http://eslint.org/docs/rules/no-new-symbol
        "no-new-wrappers": "error", // http://eslint.org/docs/rules/no-new-wrappers
        "no-obj-calls": "error", // http://eslint.org/docs/rules/no-obj-calls
        "no-octal": "error", // http://eslint.org/docs/rules/no-octal
        "no-octal-escape": "error", // http://eslint.org/docs/rules/no-octal-escape
        "no-param-reassign": "off", // http://eslint.org/docs/rules/no-param-reassign
        "no-path-concat": "warn", // http://eslint.org/docs/rules/no-path-concat
        "no-plusplus": "off", // http://eslint.org/docs/rules/no-plusplus
        "no-process-env": "off", // http://eslint.org/docs/rules/no-process-env
        // process.exit() is often used in situations where it would have been better to either throw an error or
        // let the process exit by itself.
        // There are situations where process.exit() is the cause of truncated stdout output,
        // see https://nodejs.org/api/process.html#process_process_exit_code
        // If you want to set the exit code, you can also use process.exitCode.
        // Disable this rule if you have to exit the process forcefully and you know what you're doing.
        "no-process-exit": "warn", // http://eslint.org/docs/rules/no-process-exit
        "no-proto": "error", // http://eslint.org/docs/rules/no-proto
        "no-prototype-builtins": "warn", // http://eslint.org/docs/rules/no-prototype-builtins
        "no-redeclare": "error", // http://eslint.org/docs/rules/no-redeclare
        "no-regex-spaces": "error", // http://eslint.org/docs/rules/no-regex-spaces
        "no-restricted-globals": ["error", "event"], // http://eslint.org/docs/rules/no-restricted-globals
        "no-restricted-imports": "off", // http://eslint.org/docs/rules/no-restricted-imports
        "no-restricted-modules": "off", // http://eslint.org/docs/rules/no-restricted-modules
        "no-restricted-properties": "off", // http://eslint.org/docs/rules/no-restricted-properties
        "no-restricted-syntax": ["error", "WithStatement"], // http://eslint.org/docs/rules/no-restricted-syntax
        "no-return-assign": ["error", "except-parens"], // http://eslint.org/docs/rules/no-return-assign
        "no-return-await": "error", // http://eslint.org/docs/rules/no-return-await
        "no-script-url": "warn", // http://eslint.org/docs/rules/no-script-url
        "no-self-assign": "error", // http://eslint.org/docs/rules/no-self-assign
        "no-self-compare": "error", // http://eslint.org/docs/rules/no-self-compare
        "no-sequences": "error", // http://eslint.org/docs/rules/no-sequences
        "no-shadow": "off", // http://eslint.org/docs/rules/no-shadow
        "no-shadow-restricted-names": "error", // http://eslint.org/docs/rules/no-shadow-restricted-names
        "no-sparse-arrays": "error", // http://eslint.org/docs/rules/no-sparse-arrays
        "no-sync": "off", // http://eslint.org/docs/rules/no-sync
        "no-tabs": "error", // http://eslint.org/docs/rules/no-tabs
        "no-template-curly-in-string": "error", // http://eslint.org/docs/rules/no-template-curly-in-string
        "no-ternary": "off", // eslint.org/docs/rules/no-ternary
        "no-this-before-super": "error", // http://eslint.org/docs/rules/no-this-before-super
        "no-throw-literal": "error", // http://eslint.org/docs/rules/no-throw-literal
        "no-trailing-spaces": "error", // http://eslint.org/docs/rules/no-trailing-spaces
        "no-undef": [
            "error",
            {
                typeof: false,
            },
        ], // http://eslint.org/docs/rules/no-undef
        "no-undef-init": "error", // http://eslint.org/docs/rules/no-undef-init
        // Since we disallow shadowing of undefined, it is safe to turn this rule off
        "no-undefined": "off", // http://eslint.org/docs/rules/no-undefined
        "no-underscore-dangle": "off", // http://eslint.org/docs/rules/no-underscore-dangle
        "no-unexpected-multiline": "error", // http://eslint.org/docs/rules/no-unexpected-multiline
        "no-unmodified-loop-condition": "error", // http://eslint.org/docs/rules/no-unmodified-loop-condition
        "no-unneeded-ternary": "error", // http://eslint.org/docs/rules/no-unneeded-ternary
        "no-unreachable": "error", // http://eslint.org/docs/rules/no-unreachable
        "no-unsafe-finally": "error", // http://eslint.org/docs/rules/no-unsafe-finally
        "no-unsafe-negation": "error", // http://eslint.org/docs/rules/no-unsafe-negation
        'no-unsafe-regex/no-unsafe-regex': "warn", // https://github.com/kgryte/eslint-plugin-no-unsafe-regex
        // Handled by babel/no-unused-expressions
        "no-unused-expressions": [
            "off",
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ], // http://eslint.org/docs/rules/no-unused-expressions
        "no-unused-labels": "error", // http://eslint.org/docs/rules/no-unused-labels
        "no-unused-vars": [
            "error",
            {
                args: "none",
                caughtErrors: "none",
                ignoreRestSiblings: true,
                vars: "all",
            },
        ], // http://eslint.org/docs/rules/no-unused-vars
        "no-use-before-define": "off", // http://eslint.org/docs/rules/no-use-before-define
        "no-useless-call": "error", // http://eslint.org/docs/rules/no-useless-call
        "no-useless-computed-key": "error", // http://eslint.org/docs/rules/no-useless-computed-key
        "no-useless-concat": "error", // http://eslint.org/docs/rules/no-useless-concat
        "no-useless-constructor": "error", // http://eslint.org/docs/rules/no-useless-constructor
        "no-useless-escape": "error", // http://eslint.org/docs/rules/no-useless-escape
        "no-useless-rename": "error", // http://eslint.org/docs/rules/no-useless-rename
        "no-useless-return": "error", // http://eslint.org/docs/rules/no-useless-return
        "no-var": "error", // http://eslint.org/docs/rules/no-var
        "no-void": "off", // http://eslint.org/docs/rules/no-void
        "no-warning-comments": [
            "warn",
            {
                location: "anywhere",
                terms: ["todo", "fixme", "quickfix"],
            },
        ],
        "no-whitespace-before-property": "error", // http://eslint.org/docs/rules/no-whitespace-before-property
        "no-with": "error", // http://eslint.org/docs/rules/no-with
        "object-curly-newline": [
            "error",
            {
                consistent: true,
                multiline: true,
            },
        ], // http://eslint.org/docs/rules/object-curly-newline
        // Handled by babel/object-curly-spacing
        "object-curly-spacing": ["off", "never"], // http://eslint.org/docs/rules/object-curly-spacing
        "object-property-newline": [
            "error",
            {
                allowAllPropertiesOnSameLine: true,
            },
        ], // http://eslint.org/docs/rules/object-property-newline
        "object-shorthand": ["error", "always"], // http://eslint.org/docs/rules/object-shorthand
        "one-var": ["error", "never"], // http://eslint.org/docs/rules/one-var
        "one-var-declaration-per-line": "off", // http://eslint.org/docs/rules/one-var-declaration-per-line
        "operator-assignment": ["off", "always"], // http://eslint.org/docs/rules/operator-assignment
        "operator-linebreak": ["error", "after"], // http://eslint.org/docs/rules/operator-linebreak
        // TODO: Re-active once unexpected optimizing behavior has been fixed
        // https://github.com/BrainMaestro/eslint-plugin-optimize-regex/pull/12
        "optimize-regex/optimize-regex": "off",
        "padded-blocks": ["error", "never"], // http://eslint.org/docs/rules/padded-blocks
        "padding-line-between-statements": [
            "error",
            {
                blankLine: "always",
                next: "return",
                prev: "*",
            },
            {
                blankLine: "always",
                next: "*",
                prev: ["const", "let", "var"],
            },
            {
                blankLine: "never",
                next: ["const", "let", "var"],
                prev: ["const", "let", "var"],
            },
            {
                blankLine: "always",
                next: "*",
                prev: "directive",
            },
            {
                blankLine: "any",
                next: "directive",
                prev: "directive",
            },
            {
                blankLine: "always",
                next: "function",
                prev: "*",
            },
            {
                blankLine: "always",
                next: "*",
                prev: "function",
            },
            {
                blankLine: "always",
                next: "*",
                prev: ["import", "cjs-import"],
            },
            {
                blankLine: "never",
                next: ["import", "cjs-import"],
                prev: ["import", "cjs-import"],
            },
        ], // http://eslint.org/docs/rules/padding-line-between-statements
        "prefer-arrow-callback": "error", // http://eslint.org/docs/rules/prefer-arrow-callback
        "prefer-const": "error", // http://eslint.org/docs/rules/prefer-const
        "prefer-destructuring": "off", // http://eslint.org/docs/rules/prefer-destructuring
        "prefer-numeric-literals": "error", // http://eslint.org/docs/rules/prefer-numeric-literals
        "prefer-promise-reject-errors": "error", // http://eslint.org/docs/rules/prefer-promise-reject-errors
        "prefer-rest-params": "error", // http://eslint.org/docs/rules/prefer-rest-params
        "prefer-spread": "error", // http://eslint.org/docs/rules/prefer-spread
        "prefer-template": "off", // http://eslint.org/docs/rules/prefer-template
        "promise/always-return": "error", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return.md
        "promise/avoid-new": "off", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/avoid-new.md
        "promise/catch-or-return": "error", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return.md
        "promise/no-callback-in-promise": "warn", // https://github.com/xjamundx/eslint-plugin-promise
        "promise/no-native": "off", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-native.md
        // Nesting is rarely necessary and often the sign of confusing code.
        // You can often simplify it, see https://github.com/xjamundx/eslint-plugin-promise/issues/42
        // In rare cases where nesting is desired, disable this rule.
        "promise/no-nesting": "warn", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-nesting.md
        "promise/no-new-statics": "error", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md
        "promise/no-promise-in-callback": "warn", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-promise-in-callback.md
        "promise/no-return-in-finally": "warn", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-in-finally.md
        "promise/no-return-wrap": "error", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-wrap.md
        "promise/param-names": "error", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/param-names.md
        "promise/prefer-await-to-callbacks": "error", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-callbacks.md
        "promise/prefer-await-to-then": "error", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-then.md
        "promise/valid-params": "error", // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/valid-params.md
        "quote-props": ["error", "as-needed"], // http://eslint.org/docs/rules/quote-props
        // Handled by babel/quotes
        "quotes": ["off", "double", "avoid-escape"], // http://eslint.org/docs/rules/quotes
        "radix": "off", // http://eslint.org/docs/rules/radix
        "require-await": "off", // http://eslint.org/docs/rules/require-await
        "require-jsdoc": "off", // http://eslint.org/docs/rules/require-jsdoc
        "require-yield": "off", // http://eslint.org/docs/rules/require-yield
        "rest-spread-spacing": ["error", "never"], // http://eslint.org/docs/rules/rest-spread-spacing
        // Handled by babel/semi
        "semi": "off", // http://eslint.org/docs/rules/semi
        "semi-spacing": [
            "error",
            {
                after: true,
                before: false,
            },
        ], // http://eslint.org/docs/rules/semi-spacing
        "semi-style": ["error", "last"], // http://eslint.org/docs/rules/semi-style
        "sort-imports": "off", // http://eslint.org/docs/rules/sort-imports
        "sort-keys": "off", // http://eslint.org/docs/rules/sort-keys
        "sort-vars": "off", // http://eslint.org/docs/rules/sort-vars
        "space-before-blocks": ["error", "always"], // http://eslint.org/docs/rules/space-before-blocks
        "space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "never",
            },
        ], // http://eslint.org/docs/rules/space-before-function-paren
        "space-in-parens": ["error", "never"], // http://eslint.org/docs/rules/space-in-parens
        "space-infix-ops": "error", // http://eslint.org/docs/rules/space-infix-ops
        "space-unary-ops": [
            "error",
            {
                nonwords: false,
                words: true,
            },
        ], // http://eslint.org/docs/rules/space-unary-ops
        "spaced-comment": ["error", "always", {exceptions: ["-"]}], // http://eslint.org/docs/rules/spaced-comment
        "strict": "error", // http://eslint.org/docs/rules/strict
        "switch-colon-spacing": [
            "error",
            {
                "after": true,
                "before": false,
            },
        ], // "switch-colon-spacing": ["error", {"after": true, "before": false}]
        "symbol-description": "error", // http://eslint.org/docs/rules/symbol-description
        "template-curly-spacing": ["error", "never"], // http://eslint.org/docs/rules/template-curly-spacing
        "template-tag-spacing": ["error", "never"], // http://eslint.org/docs/rules/template-tag-spacing
        "unicode-bom": ["error", "never"], // http://eslint.org/docs/rules/unicode-bom
        "use-isnan": "error", // http://eslint.org/docs/rules/use-isnan
        "valid-jsdoc": [
            "error",
            {
                prefer: {
                    return: "returns",
                },
                requireParamDescription: false,
                requireReturn: false, // still requires to document returns if there is a return
                requireReturnDescription: false,
            },
        ], // http://eslint.org/docs/rules/valid-jsdoc
        "valid-typeof": "error", // http://eslint.org/docs/rules/valid-typeof
        "vars-on-top": "error", // http://eslint.org/docs/rules/vars-on-top
        "wrap-iife": "off", // http://eslint.org/docs/rules/wrap-iife
        "wrap-regex": "off", // http://eslint.org/docs/rules/wrap-regex
        "yield-star-spacing": ["error", "after"], // http://eslint.org/docs/rules/yield-star-spacing
        "yoda": ["error", "never"], // http://eslint.org/docs/rules/yoda
    },
};
