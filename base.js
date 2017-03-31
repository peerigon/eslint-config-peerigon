/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    parser: "babel-eslint",
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    plugins: [
        "jsdoc",
        "import"
    ],
    extends: [
        "eslint:recommended",
        "plugin:import/recommended"
    ],
    rules: {
        /* eslint-enable sort-keys */
        "accessor-pairs": ["error", {
            getWithoutSet: true
        }], // http://eslint.org/docs/rules/accessor-pairs
        "array-bracket-spacing": ["error", "never"], // http://eslint.org/docs/rules/array-bracket-spacing
        "array-callback-return": ["error"], // http://eslint.org/docs/rules/array-callback-return
        "arrow-body-style": ["error", "as-needed"], // http://eslint.org/docs/rules/arrow-body-style
        "arrow-parens": "off", // http://eslint.org/docs/rules/arrow-parens
        "arrow-spacing": ["error", { after: true, before: true }], // http://eslint.org/docs/rules/arrow-spacing
        "block-scoped-var": "error", // http://eslint.org/docs/rules/block-scoped-var
        "block-spacing": "error", // http://eslint.org/docs/rules/block-spacing
        "brace-style": ["error", "1tbs"], // http://eslint.org/docs/rules/brace-style
        "callback-return": "error", // http://eslint.org/docs/rules/callback-return
        "camelcase": ["error", { properties: "always" }], // http://eslint.org/docs/rules/camelcase
        "capitalized-comments": ["off"], // http://eslint.org/docs/rules/capitalized-comments
        "class-methods-use-this": ["error"], // http://eslint.org/docs/rules/class-methods-use-this
        "comma-dangle": ["error", {
            arrays: "always-multiline",
            exports: "always-multiline",
            functions: "ignore",
            imports: "always-multiline",
            objects: "always-multiline",
        }], // http://eslint.org/docs/rules/comma-dangle
        "comma-spacing": ["error", { after: true, before: false }], // http://eslint.org/docs/rules/comma-spacing
        "comma-style": ["error", "last"], // http://eslint.org/docs/rules/comma-style
        "complexity": ["warn", {
            max: 8
        }], // http://eslint.org/docs/rules/complexity
        "computed-property-spacing": ["error", "never"], // http://eslint.org/docs/rules/computed-property-spacing
        "consistent-return": "error", // http://eslint.org/docs/rules/consistent-return
        "consistent-this": ["off", "self"], // http://eslint.org/docs/rules/consistent-this
        "constructor-super": "error", // http://eslint.org/docs/rules/constructor-super
        "curly": ["error", "all"], // http://eslint.org/docs/rules/curly
        "default-case": "off", // http://eslint.org/docs/rules/default-case
        "dot-location": ["error", "property"], // http://eslint.org/docs/rules/dot-location
        // We don't support ES3 envs anymore, so allowKeywords: true is ok
        "dot-notation": ["error", { allowKeywords: true }], // http://eslint.org/docs/rules/dot-notation
        "eol-last": "off", // http://eslint.org/docs/rules/eol-last
        "eqeqeq": ["error", "always"], // http://eslint.org/docs/rules/eqeqeq
        "func-call-spacing": ["error", "never"], // http://eslint.org/docs/rules/func-call-spacing
        "func-name-matching": ["off"], // http://eslint.org/docs/rules/func-name-matching
        "func-names": "off", // http://eslint.org/docs/rules/func-names
        "func-style": ["error", "declaration"], // http://eslint.org/docs/rules/func-style
        "generator-star-spacing": ["error", { after: true, before: false }], // http://eslint.org/docs/rules/generator-star-spacing
        "global-require": "off", // http://eslint.org/docs/rules/global-require
        "guard-for-in": "warn", // http://eslint.org/docs/rules/guard-for-in
        "handle-callback-err": ["error", "^(err|error)$"], // http://eslint.org/docs/rules/handle-callback-err
        "id-blacklist": ["off"], // http://eslint.org/docs/rules/id-blacklist
        "id-length": ["warn", {
            max: 40,
            min: 0
        }], // http://eslint.org/docs/rules/id-length
        "id-match": "off", // http://eslint.org/docs/rules/id-match
        "import/default": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
        "import/export": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
        "import/extensions": ["error", "always", {
            "js": "never",
            "json": "never",
            "jsx": "never"
        }], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        "import/first": ["error", "absolute-first"], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
        // Using more than 15 dependencies in one module is a sign that this module is doing too much.
        // You should consider splitting that module into different parts.
        "import/max-dependencies": ["warn", { max: 15 }], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
        "import/named": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
        "import/namespace": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
        "import/newline-after-import": ["error", { count: 1 }], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
        "import/no-absolute-path": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
        "import/no-amd": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
        "import/no-anonymous-default-export": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
        "import/no-commonjs": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
        "import/no-deprecated": "warn", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
        "import/no-duplicates": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        "import/no-dynamic-require": "warn", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
        "import/no-extraneous-dependencies": ["error", {
            devDependencies: ["test/**", "**/*.test.js", "**/*.spec.js", "**/types.js"],
            optionalDependencies: true,
            peerDependencies: true
        }], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        "import/no-internal-modules": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
        "import/no-mutable-exports": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
        "import/no-named-as-default": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
        "import/no-named-as-default-member": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
        "import/no-named-default": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
        "import/no-namespace": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
        "import/no-nodejs-modules": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
        "import/no-restricted-paths": ["error", {
            basePath: "./app",
            zones: [
                { from: "./server", target: "./client" },
                { from: "./client", target: "./server" }
            ]
        }], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
        "import/no-unassigned-import": "warn", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
        "import/no-unresolved": ["error", { commonjs: true }], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        "import/no-webpack-loader-syntax": "warn", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
        "import/order": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        // While default exports are better most of the time, there may be cases where you just have one named export
        // but it is very likely that there will be more exports in the future.
        // In this case, this warning can be annoying.
        "import/prefer-default-export": "off", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        "import/unambiguous": "warn", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
        "indent": ["error", 4, {
            ArrayExpression: 1,
            CallExpression: {
                arguments: 1
            },
            FunctionDeclaration: {
                body: 1,
                parameters: 1
            },
            FunctionExpression: {
                body: 1,
                parameters: 1
            },
            MemberExpression: 1,
            ObjectExpression: 1,
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1
        }], // http://eslint.org/docs/rules/indent
        "init-declarations": "off", // http://eslint.org/docs/rules/init-declarations
        // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/README.md
        "jsdoc/check-param-names": "error",
        "jsdoc/check-tag-names": "error",
        "jsdoc/check-types": "error",
        "jsdoc/newline-after-description": "error",
        "jsdoc/require-description-complete-sentence": "off",
        "jsdoc/require-hyphen-before-param-description": "error",
        "jsdoc/require-param": "error",
        "jsdoc/require-param-description": "off",
        "jsdoc/require-param-type": "error",
        "jsdoc/require-returns-description": "off",
        "jsdoc/require-returns-type": "error",
        "jsx-quotes": ["error", "prefer-double"], // http://eslint.org/docs/rules/jsx-quotes
        "key-spacing": ["error", { afterColon: true, beforeColon: false }], // http://eslint.org/docs/rules/key-spacing
        "keyword-spacing": ["error"], // http://eslint.org/docs/rules/keyword-spacing
        "line-comment-position": "off", // http://eslint.org/docs/rules/line-comment-position
        "linebreak-style": ["off", "unix"], // http://eslint.org/docs/rules/linebreak-style
        "lines-around-comment": "off", // http://eslint.org/docs/rules/lines-around-comment
        "lines-around-directive": ["error", { after: "always", before: "never" }], // http://eslint.org/docs/rules/lines-around-directive
        "max-depth": ["warn", 4], // http://eslint.org/docs/rules/max-depth
        "max-len": ["warn", {
            code: 120,
            comments: 120,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
            tabWidth: 4,
        }], // http://eslint.org/docs/rules/max-len
        "max-lines": ["warn", {
            max: 300,
            skipBlankLines: true,
            skipComments: true
        }],
        "max-nested-callbacks": ["warn", 3], // http://eslint.org/docs/rules/max-nested-callbacks
        "max-params": ["warn", { max: 4 }], // http://eslint.org/docs/rules/max-params
        "max-statements": "off", // http://eslint.org/docs/rules/max-statements
        "max-statements-per-line": ["error", { max: 1 }], // http://eslint.org/docs/rules/max-statements-per-line
        "multiline-ternary": "off", // http://eslint.org/docs/rules/multiline-ternary
        "new-cap": "error", // http://eslint.org/docs/rules/new-cap
        "new-parens": "error", // http://eslint.org/docs/rules/new-parens
        "newline-after-var": ["error", "always"], // http://eslint.org/docs/rules/newline-after-var
        "newline-before-return": "error", // http://eslint.org/docs/rules/newline-before-return
        "newline-per-chained-call": "error", // http://eslint.org/docs/rules/newline-per-chained-call
        "no-alert": "warn", // http://eslint.org/docs/rules/no-alert
        "no-array-constructor": "error", // http://eslint.org/docs/rules/no-array-constructor
        "no-await-in-loop": "warn", // http://eslint.org/docs/rules/no-await-in-loop
        "no-bitwise": "error", // http://eslint.org/docs/rules/no-bitwise
        "no-caller": "error", // http://eslint.org/docs/rules/no-caller
        "no-case-declarations": "error", // http://eslint.org/docs/rules/no-case-declarations
        "no-catch-shadow": "off", // http://eslint.org/docs/rules/no-catch-shadow
        "no-class-assign": "error", // http://eslint.org/docs/rules/no-class-assign
        "no-cond-assign": ["error", "except-parens"], // http://eslint.org/docs/rules/no-cond-assign
        "no-confusing-arrow": ["error", { allowParens : true }], // http://eslint.org/docs/rules/no-confusing-arrow
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
        "no-invalid-this": "error", // http://eslint.org/docs/rules/no-invalid-this
        "no-irregular-whitespace": "error", // http://eslint.org/docs/rules/no-irregular-whitespace
        "no-iterator": "error", // http://eslint.org/docs/rules/no-iterator
        "no-label-var": "error", // http://eslint.org/docs/rules/no-label-var
        "no-labels": "error", // http://eslint.org/docs/rules/no-labels
        "no-lone-blocks": "error", // http://eslint.org/docs/rules/no-lone-blocks
        "no-lonely-if": "error", // http://eslint.org/docs/rules/no-lonely-if
        "no-loop-func": "warn", // http://eslint.org/docs/rules/no-loop-func
        "no-magic-numbers": ["off", {
            // These settings are currently unused, but we may re-use them once we decide to have that rule again.
            ignore: [
                // digits are ok
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                // multiplications of 10
                -1, -10, -100, -1000,
                10, 100, 1000,
                // bytes
                16, 32, 64, 128, 256, 512, 1024,
                // time
                60, 24, 365,
                // ports
                80, 443, 1337, 3000, 8080
            ],
            ignoreArrayIndexes: true // using array indexes is not a good style, but we don't want to be too strict about that
        }], // http://eslint.org/docs/rules/no-magic-numbers
        "no-mixed-operators": "error", // http://eslint.org/docs/rules/no-mixed-operators
        "no-mixed-requires": ["error", {
            allowCall: true,
            grouping: false
        }], // http://eslint.org/docs/rules/no-mixed-requires
        "no-mixed-spaces-and-tabs": ["error", false], // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
        "no-multi-assign": "off", // http://eslint.org/docs/rules/no-multi-assign
        "no-multi-spaces": "error", // http://eslint.org/docs/rules/no-multi-spaces
        "no-multi-str": "error", // http://eslint.org/docs/rules/no-multi-str
        "no-multiple-empty-lines": ["error", { max: 1 }], // http://eslint.org/docs/rules/no-multiple-empty-lines
        "no-negated-condition": "error", // http://eslint.org/docs/rules/no-negated-condition
        "no-nested-ternary": "error", // http://eslint.org/docs/rules/no-nested-ternary
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
        "no-process-exit": "error", // http://eslint.org/docs/rules/no-process-exit
        "no-proto": "error", // http://eslint.org/docs/rules/no-proto
        "no-prototype-builtins": "warn", // http://eslint.org/docs/rules/no-prototype-builtins
        "no-redeclare": "error", // http://eslint.org/docs/rules/no-redeclare
        "no-regex-spaces": "error", // http://eslint.org/docs/rules/no-regex-spaces
        "no-restricted-globals": ["error", "event"], // http://eslint.org/docs/rules/no-restricted-globals
        "no-restricted-imports": "off", // http://eslint.org/docs/rules/no-restricted-imports
        "no-restricted-modules": "off", // http://eslint.org/docs/rules/no-restricted-modules
        "no-restricted-properties": "off", // http://eslint.org/docs/rules/no-restricted-properties
        "no-restricted-syntax": ["error",
            "WithStatement"
        ], // http://eslint.org/docs/rules/no-restricted-syntax
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
        "no-undef": ["error", {
            // A developer should introduce global variables explicitly to eslint
            typeof: true
        }], // http://eslint.org/docs/rules/no-undef
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
        "no-unused-expressions": ["error", {
            allowShortCircuit: true,
            allowTernary: true
        }], // http://eslint.org/docs/rules/no-unused-expressions
        "no-unused-labels": "error", // http://eslint.org/docs/rules/no-unused-labels
        "no-unused-vars": ["error", { args: "none", vars: "all" }], // http://eslint.org/docs/rules/no-unused-vars
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
        "no-warning-comments": ["warn", { location: "anywhere", terms: ["todo", "fixme", "quickfix"] }],
        "no-whitespace-before-property": "error", // http://eslint.org/docs/rules/no-whitespace-before-property
        "no-with": "error", // http://eslint.org/docs/rules/no-with
        "object-curly-newline": "off",// http://eslint.org/docs/rules/object-curly-newline
        "object-curly-spacing": ["error", "always"], // http://eslint.org/docs/rules/object-curly-spacing
        "object-property-newline": "off", // http://eslint.org/docs/rules/object-property-newline
        "object-shorthand": ["error", "always"], // http://eslint.org/docs/rules/object-shorthand
        "one-var": ["error", "never"], // http://eslint.org/docs/rules/one-var
        "one-var-declaration-per-line": "off", // http://eslint.org/docs/rules/one-var-declaration-per-line
        "operator-assignment": ["off", "always"], // http://eslint.org/docs/rules/operator-assignment
        "operator-linebreak": ["error", "after"], // http://eslint.org/docs/rules/operator-linebreak
        "padded-blocks": ["error", "never"], // http://eslint.org/docs/rules/padded-blocks
        "prefer-arrow-callback": "error", // http://eslint.org/docs/rules/prefer-arrow-callback
        "prefer-const": "error", // http://eslint.org/docs/rules/prefer-const
        "prefer-destructuring": "off", // http://eslint.org/docs/rules/prefer-destructuring
        "prefer-numeric-literals": "error", // http://eslint.org/docs/rules/prefer-numeric-literals
        "prefer-promise-reject-errors": "error", // http://eslint.org/docs/rules/prefer-promise-reject-errors
        "prefer-rest-params": "error", // http://eslint.org/docs/rules/prefer-rest-params
        "prefer-spread": "error", // http://eslint.org/docs/rules/prefer-spread
        "prefer-template": "off", // http://eslint.org/docs/rules/prefer-template
        "quote-props": ["error", "as-needed"], // http://eslint.org/docs/rules/quote-props
        "quotes": ["error", "double", "avoid-escape"], // http://eslint.org/docs/rules/quotes
        "radix": "off", // http://eslint.org/docs/rules/radix
        "require-await": "error", // http://eslint.org/docs/rules/require-await
        "require-jsdoc": "off", // http://eslint.org/docs/rules/require-jsdoc
        "require-yield": "error", // http://eslint.org/docs/rules/require-yield
        "rest-spread-spacing": ["error", "never"], // http://eslint.org/docs/rules/rest-spread-spacing
        "semi": "error", // http://eslint.org/docs/rules/semi
        "semi-spacing": ["error", { after: true, before: false }], // http://eslint.org/docs/rules/semi-spacing
        "sort-imports": "off", // http://eslint.org/docs/rules/sort-imports
        "sort-keys": "off", // http://eslint.org/docs/rules/sort-keys
        "sort-vars": "off", // http://eslint.org/docs/rules/sort-vars
        "space-before-blocks": ["error", "always"], // http://eslint.org/docs/rules/space-before-blocks
        "space-before-function-paren": ["error", { anonymous: "always", named: "never" }], // http://eslint.org/docs/rules/space-before-function-paren
        "space-in-parens": ["error", "never"], // http://eslint.org/docs/rules/space-in-parens
        "space-infix-ops": "error", // http://eslint.org/docs/rules/space-infix-ops
        "space-unary-ops": ["error", { nonwords: false, words: true }], // http://eslint.org/docs/rules/space-unary-ops
        "spaced-comment": ["error", "always", { exceptions: ["-"] }], // http://eslint.org/docs/rules/spaced-comment
        "strict": "error", // http://eslint.org/docs/rules/strict
        "symbol-description": "error", // http://eslint.org/docs/rules/symbol-description
        "template-curly-spacing": ["error", "always"], // http://eslint.org/docs/rules/template-curly-spacing
        "template-tag-spacing": ["error", "never"], // http://eslint.org/docs/rules/template-tag-spacing
        "unicode-bom": ["error", "never"], // http://eslint.org/docs/rules/unicode-bom
        "use-isnan": "error", // http://eslint.org/docs/rules/use-isnan
        "valid-jsdoc": ["error", {
            prefer: {
                return: "returns"
            },
            requireParamDescription: false,
            requireReturn: false, // still requires to document returns if there is a return
            requireReturnDescription: false
        }], // http://eslint.org/docs/rules/valid-jsdoc
        "valid-typeof": "error", // http://eslint.org/docs/rules/valid-typeof
        "vars-on-top": "error", // http://eslint.org/docs/rules/vars-on-top
        "wrap-iife": "off", // http://eslint.org/docs/rules/wrap-iife
        "wrap-regex": "off", // http://eslint.org/docs/rules/wrap-regex
        "yield-star-spacing": ["error", "after"], // http://eslint.org/docs/rules/yield-star-spacing
        "yoda": ["error", "never"] // http://eslint.org/docs/rules/yoda
    }
};
