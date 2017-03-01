module.exports = {
    parser: "espree",
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
        "no-alert": "error", // http://eslint.org/docs/rules/no-alert
        "no-array-constructor": "error", // http://eslint.org/docs/rules/no-array-constructor
        "no-bitwise": "error", // http://eslint.org/docs/rules/no-bitwise
        "no-caller": "error", // http://eslint.org/docs/rules/no-caller
        "no-catch-shadow": "off", // http://eslint.org/docs/rules/no-catch-shadow
        "no-class-assign": "error", // http://eslint.org/docs/rules/no-class-assign
        "no-cond-assign": ["error", "except-parens"], // http://eslint.org/docs/rules/no-cond-assign
        "no-console": "off", // http://eslint.org/docs/rules/no-console
        "no-const-assign": "error", // http://eslint.org/docs/rules/no-const-assign
        "no-constant-condition": "error", // http://eslint.org/docs/rules/no-constant-condition
        "no-continue": "off", // http://eslint.org/docs/rules/no-continue
        "no-control-regex": "error", // http://eslint.org/docs/rules/no-control-regex
        "no-debugger": "error", // http://eslint.org/docs/rules/no-debugger
        "no-delete-var": "error", // http://eslint.org/docs/rules/no-delete-var
        "no-div-regex": "off", // http://eslint.org/docs/rules/no-div-regex
        "no-dupe-class-members": "error", // http://eslint.org/docs/rules/no-dupe-class-members
        "no-dupe-keys": "error", // http://eslint.org/docs/rules/no-dupe-keys
        "no-dupe-args": "error", // http://eslint.org/docs/rules/no-dupe-args
        "no-duplicate-case": "error", // http://eslint.org/docs/rules/no-duplicate-case
        "no-else-return": "error", // http://eslint.org/docs/rules/no-else-return
        "no-empty": "error", // http://eslint.org/docs/rules/no-empty
        "no-empty-character-class": "error",
        "no-labels": "error", // http://eslint.org/docs/rules/no-labels
        "no-eq-null": "error", // http://eslint.org/docs/rules/no-eq-null
        "no-eval": "error", // http://eslint.org/docs/rules/no-eval
        "no-ex-assign": "error", // http://eslint.org/docs/rules/no-ex-assign
        "no-extend-native": "error", // http://eslint.org/docs/rules/no-extend-native
        "no-extra-bind": "error", // http://eslint.org/docs/rules/no-extra-bind
        "no-extra-boolean-cast": "error", // http://eslint.org/docs/rules/no-extra-boolean-cast
        "no-extra-parens": "off", // http://eslint.org/docs/rules/no-extra-parens
        "no-extra-semi": "error", // http://eslint.org/docs/rules/no-extra-semi
        "no-fallthrough": "error", // http://eslint.org/docs/rules/no-fallthrough
        "no-floating-decimal": "error", // http://eslint.org/docs/rules/no-floating-decimal
        "no-func-assign": "error", // http://eslint.org/docs/rules/no-func-assign
        "no-implicit-coercion": "error", // http://eslint.org/docs/rules/no-implicit-coercion
        "no-implied-eval": "error", // http://eslint.org/docs/rules/no-implied-eval
        "no-inline-comments": "off", // http://eslint.org/docs/rules/no-inline-comments
        "no-inner-declarations": ["error", "functions"], // http://eslint.org/docs/rules/no-inner-declarations
        "no-invalid-regexp": "error", // http://eslint.org/docs/rules/no-invalid-regexp
        "no-invalid-this": "error", // http://eslint.org/docs/rules/no-invalid-this
        "no-irregular-whitespace": "error", // http://eslint.org/docs/rules/no-irregular-whitespace
        "no-iterator": "error", // http://eslint.org/docs/rules/no-iterator
        "no-label-var": "error", // http://eslint.org/docs/rules/no-label-var
        "no-lone-blocks": "error", // http://eslint.org/docs/rules/no-lone-blocks
        "no-lonely-if": "off", // http://eslint.org/docs/rules/no-lonely-if
        "no-loop-func": "error", // http://eslint.org/docs/rules/no-loop-func
        "no-mixed-requires": ["off", false], // http://eslint.org/docs/rules/no-mixed-requires
        "no-mixed-spaces-and-tabs": ["error", false], // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
        "linebreak-style": ["off", "unix"], // http://eslint.org/docs/rules/linebreak-style
        "no-multi-spaces": "error", // http://eslint.org/docs/rules/no-multi-spaces
        "no-multi-str": "error", // http://eslint.org/docs/rules/no-multi-str
        "no-multiple-empty-lines": ["error", { max: 1 }], // http://eslint.org/docs/rules/no-multiple-empty-lines
        "no-native-reassign": "error", // http://eslint.org/docs/rules/no-native-reassign
        "no-negated-in-lhs": "error", // http://eslint.org/docs/rules/no-negated-in-lhs
        "no-nested-ternary": "error", // http://eslint.org/docs/rules/no-nested-ternary
        "no-new": "error", // http://eslint.org/docs/rules/no-new
        "no-new-func": "error", // http://eslint.org/docs/rules/no-new-func
        "no-new-object": "error", // http://eslint.org/docs/rules/no-new-object
        "no-new-require": "error", // http://eslint.org/docs/rules/no-new-require
        "no-new-wrappers": "error", // http://eslint.org/docs/rules/no-new-wrappers
        "no-obj-calls": "error", // http://eslint.org/docs/rules/no-obj-calls
        "no-octal": "error", // http://eslint.org/docs/rules/no-octal
        "no-octal-escape": "error", // http://eslint.org/docs/rules/no-octal-escape
        "no-param-reassign": "off", // http://eslint.org/docs/rules/no-param-reassign
        "no-path-concat": "error", // http://eslint.org/docs/rules/no-path-concat
        "no-plusplus": "off",
        "no-process-env": "off", // http://eslint.org/docs/rules/no-process-env
        "no-process-exit": "off", // http://eslint.org/docs/rules/no-process-exit
        "no-proto": "error", // http://eslint.org/docs/rules/no-proto
        "no-redeclare": "error", // http://eslint.org/docs/rules/no-redeclare
        "no-regex-spaces": "error", // http://eslint.org/docs/rules/no-regex-spaces
        "no-restricted-modules": "off", // http://eslint.org/docs/rules/no-restricted-modules
        "no-restricted-syntax": "off", // http://eslint.org/docs/rules/no-restricted-syntax
        "no-return-assign": "off", // http://eslint.org/docs/rules/no-return-assign
        "no-script-url": "off", // http://eslint.org/docs/rules/no-script-url
        "no-self-compare": "error", // http://eslint.org/docs/rules/no-self-compare
        "no-sequences": "error", // http://eslint.org/docs/rules/no-sequences
        "no-shadow": "off", // http://eslint.org/docs/rules/no-shadow
        "no-shadow-restricted-names": "error", // http://eslint.org/docs/rules/no-shadow-restricted-names
        "no-spaced-func": "error", // http://eslint.org/docs/rules/no-spaced-func
        "no-sparse-arrays": "error", // http://eslint.org/docs/rules/no-sparse-arrays
        "no-sync": "off", // http://eslint.org/docs/rules/no-sync
        "no-ternary": "off", // eslint.org/docs/rules/no-ternary
        "no-trailing-spaces": "error", // http://eslint.org/docs/rules/no-trailing-spaces
        "no-this-before-super": "error", // http://eslint.org/docs/rules/no-this-before-super
        "no-throw-literal": "error", // http://eslint.org/docs/rules/no-throw-literal
        "no-undef": "error", // http://eslint.org/docs/rules/no-undef
        "no-undef-init": "error", // http://eslint.org/docs/rules/no-undef-init
        "no-undefined": "error", // http://eslint.org/docs/rules/no-undefined
        "no-unexpected-multiline": "error", // http://eslint.org/docs/rules/no-unexpected-multiline
        "no-underscore-dangle": "off", // http://eslint.org/docs/rules/no-underscore-dangle
        "no-unneeded-ternary": "error", // http://eslint.org/docs/rules/no-unneeded-ternary
        "no-unreachable": "error", // http://eslint.org/docs/rules/no-unreachable
        "no-unused-expressions": ["error", {
            allowShortCircuit: true,
            allowTernary: true
        }], // http://eslint.org/docs/rules/no-unused-expressions
        "no-unused-vars": ["error", { vars: "all", args: "none" }], // http://eslint.org/docs/rules/no-unused-vars
        "no-use-before-define": "off", // http://eslint.org/docs/rules/no-use-before-define
        "no-useless-call": "off", // http://eslint.org/docs/rules/no-useless-call
        "no-useless-concat": "error", // http://eslint.org/docs/rules/no-useless-concat
        "no-void": "error", // http://eslint.org/docs/rules/no-void
        "no-var": "error", // http://eslint.org/docs/rules/no-var
        "no-warning-comments": ["warn", { terms: ["todo", "fixme", "quickfix"], location: "anywhere" }],
        "no-with": "error", // http://eslint.org/docs/rules/no-with
        "array-bracket-spacing": ["error", "never"], // http://eslint.org/docs/rules/array-bracket-spacing
        "arrow-parens": "off", // http://eslint.org/docs/rules/arrow-parens
        "arrow-spacing": ["error", { before: true, after: true }], // http://eslint.org/docs/rules/arrow-spacing
        "accessor-pairs": ["error", {
            getWithoutSet: true
        }], // http://eslint.org/docs/rules/accessor-pairs
        "block-scoped-var": "error", // http://eslint.org/docs/rules/block-scoped-var
        "block-spacing": "error", // http://eslint.org/docs/rules/block-spacing
        "brace-style": ["error", "1tbs"], // http://eslint.org/docs/rules/brace-style
        "callback-return": "error", // http://eslint.org/docs/rules/callback-return
        camelcase: ["error", { properties: "always" }], // http://eslint.org/docs/rules/camelcase
        "comma-dangle": ["error", "never"], // http://eslint.org/docs/rules/comma-dangle
        "comma-spacing": ["error", { before: false, after: true }], // http://eslint.org/docs/rules/comma-spacing
        "comma-style": ["error", "last"], // http://eslint.org/docs/rules/comma-style
        complexity: ["warn", {
            max: 20
        }], // http://eslint.org/docs/rules/complexity
        "computed-property-spacing": ["error", "never"], // http://eslint.org/docs/rules/computed-property-spacing
        "consistent-return": "error", // http://eslint.org/docs/rules/consistent-return
        "consistent-this": ["off", "self"], // http://eslint.org/docs/rules/consistent-this
        "constructor-super": "error", // http://eslint.org/docs/rules/constructor-super
        curly: ["error", "all"], // http://eslint.org/docs/rules/curly
        "default-case": "error", // http://eslint.org/docs/rules/default-case
        "dot-location": ["error", "property"], // http://eslint.org/docs/rules/dot-location
        "dot-notation": ["error", { allowKeywords: true }], // http://eslint.org/docs/rules/dot-notation
        "eol-last": "off", // http://eslint.org/docs/rules/eol-last
        eqeqeq: ["error", "smart"], // http://eslint.org/docs/rules/eqeqeq
        "func-names": "off", // http://eslint.org/docs/rules/func-names
        "func-style": ["error", "declaration"], // http://eslint.org/docs/rules/func-style
        "generator-star-spacing": ["error", { before: false, after: true }], // http://eslint.org/docs/rules/generator-star-spacing
        "global-require": "off", // http://eslint.org/docs/rules/global-require
        "guard-for-in": "off", // http://eslint.org/docs/rules/guard-for-in
        "handle-callback-err": ["error", "^(err|error)$"], // http://eslint.org/docs/rules/handle-callback-err
        "id-length": "off", // http://eslint.org/docs/rules/id-length
        indent: ["error", 4, { SwitchCase: 1 }], // http://eslint.org/docs/rules/indent
        "init-declarations": "off", // http://eslint.org/docs/rules/init-declarations
        // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/README.md
        "jsdoc/check-param-names": "error",
        "jsdoc/check-tag-names": "error",
        "jsdoc/check-types": "error",
        "jsdoc/newline-after-description": "error",
        "jsdoc/require-description-complete-sentence": "error",
        "jsdoc/require-hyphen-before-param-description": "error",
        "jsdoc/require-param": "error",
        "jsdoc/require-param-description": "off",
        "jsdoc/require-param-type": "error",
        "jsdoc/require-returns-description": "off",
        "jsdoc/require-returns-type": "error",
        "jsx-quotes": ["error", "prefer-double"], // http://eslint.org/docs/rules/jsx-quotes
        "key-spacing": ["error", { beforeColon: false, afterColon: true }], // http://eslint.org/docs/rules/key-spacing
        "lines-around-comment": "off", // http://eslint.org/docs/rules/lines-around-comment
        "max-depth": ["off", 4], // http://eslint.org/docs/rules/max-depth
        "max-len": ["off", 80, 4], // http://eslint.org/docs/rules/max-len
        "max-nested-callbacks": ["error", 3], // http://eslint.org/docs/rules/max-nested-callbacks
        "max-params": ["off", 3], // http://eslint.org/docs/rules/max-params
        "max-statements": ["off", 10], // http://eslint.org/docs/rules/max-statements
        "new-cap": "error", // http://eslint.org/docs/rules/new-cap"
        "new-parens": "error", // http://eslint.org/docs/rules/new-parens
        "newline-after-var": ["error", "always"], // http://eslint.org/docs/rules/newline-after-var
        "object-curly-spacing": ["error", "always"], // http://eslint.org/docs/rules/object-curly-spacing
        "object-shorthand": ["error", "always"], // http://eslint.org/docs/rules/object-shorthand
        "one-var": ["error", "never"], // http://eslint.org/docs/rules/one-var
        "operator-assignment": ["off", "always"], // http://eslint.org/docs/rules/operator-assignment
        "operator-linebreak": ["error", "after"], // http://eslint.org/docs/rules/operator-linebreak
        "padded-blocks": ["error", "never"], // http://eslint.org/docs/rules/padded-blocks
        "prefer-arrow-callback": "error", // http://eslint.org/docs/rules/prefer-arrow-callback
        "prefer-const": "error", // http://eslint.org/docs/rules/prefer-const
        "prefer-spread": "error", // http://eslint.org/docs/rules/prefer-spread
        "prefer-template": "off", // http://eslint.org/docs/rules/prefer-template
        "template-curly-spacing": ["error", "always"], // http://eslint.org/docs/rules/template-curly-spacing
        "quote-props": ["error", "as-needed"], // http://eslint.org/docs/rules/quote-props
        quotes: ["error", "double", "avoid-escape"], // http://eslint.org/docs/rules/quotes
        radix: "off", // http://eslint.org/docs/rules/radix
        "id-match": "off", // http://eslint.org/docs/rules/id-match
        "require-jsdoc": "off", // http://eslint.org/docs/rules/require-jsdoc
        "require-yield": "error", // http://eslint.org/docs/rules/require-yield
        semi: "error", // http://eslint.org/docs/rules/semi
        "semi-spacing": ["error", { before: false, after: true }], // http://eslint.org/docs/rules/semi-spacing
        "sort-vars": "off", // http://eslint.org/docs/rules/sort-vars
        "keyword-spacing": ["error"], // http://eslint.org/docs/rules/keyword-spacing
        "space-before-blocks": ["error", "always"], // http://eslint.org/docs/rules/space-before-blocks
        "space-before-function-paren": ["error", { anonymous: "always", named: "never" }], // http://eslint.org/docs/rules/space-before-function-paren
        "space-in-parens": ["error", "never"], // http://eslint.org/docs/rules/space-in-parens
        "space-infix-ops": "error", // http://eslint.org/docs/rules/space-infix-ops
        "space-unary-ops": ["error", { words: true, nonwords: false }], // http://eslint.org/docs/rules/space-unary-ops
        "spaced-comment": ["error", "always", { exceptions: ["-"] }], // http://eslint.org/docs/rules/spaced-comment
        strict: "error", // http://eslint.org/docs/rules/strict
        "use-isnan": "error", // http://eslint.org/docs/rules/use-isnan
        "valid-jsdoc": ["error", {
            requireParamDescription: false,
            requireReturnDescription: false,
            requireReturn: false, // still requires to document returns if there is a return
            prefer: {
                return: "returns"
            }
        }], // http://eslint.org/docs/rules/valid-jsdoc
        "valid-typeof": "error", // http://eslint.org/docs/rules/valid-typeof
        "vars-on-top": "error", // http://eslint.org/docs/rules/vars-on-top
        "wrap-iife": "off", // http://eslint.org/docs/rules/wrap-iife
        "wrap-regex": "off", // http://eslint.org/docs/rules/wrap-regex
        yoda: ["error", "never"] // http://eslint.org/docs/rules/yoda
    }
};
