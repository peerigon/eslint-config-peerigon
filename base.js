module.exports = {
    "parser": "espree",
    "env": {
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "jsdoc",
        "import"
    ],
    "extends": [
        "plugin:import/recommended"
    ],
    "rules": {
        "no-alert": 0, // http://eslint.org/docs/rules/no-alert
        "no-array-constructor": 2, // http://eslint.org/docs/rules/no-array-constructor
        "no-bitwise": 0,
        "no-caller": 2, // http://eslint.org/docs/rules/no-caller
        "no-catch-shadow": 0, // http://eslint.org/docs/rules/no-catch-shadow
        "no-class-assign": 2, // http://eslint.org/docs/rules/no-class-assign
        "no-cond-assign": [2, "except-parens"], // http://eslint.org/docs/rules/no-cond-assign
        "no-console": 0, // http://eslint.org/docs/rules/no-console
        "no-const-assign": 2, // http://eslint.org/docs/rules/no-const-assign
        "no-constant-condition": 2, // http://eslint.org/docs/rules/no-constant-condition
        "no-continue": 0, // http://eslint.org/docs/rules/no-continue
        "no-control-regex": 2, // http://eslint.org/docs/rules/no-control-regex
        "no-debugger": 2, // http://eslint.org/docs/rules/no-debugger
        "no-delete-var": 2, // http://eslint.org/docs/rules/no-delete-var
        "no-div-regex": 0, // http://eslint.org/docs/rules/no-div-regex
        "no-dupe-class-members": 2, // http://eslint.org/docs/rules/no-dupe-class-members
        "no-dupe-keys": 2, // http://eslint.org/docs/rules/no-dupe-keys
        "no-dupe-args": 2, // http://eslint.org/docs/rules/no-dupe-args
        "no-duplicate-case": 2, // http://eslint.org/docs/rules/no-duplicate-case
        "no-else-return": 2, // http://eslint.org/docs/rules/no-else-return
        "no-empty": 2, // http://eslint.org/docs/rules/no-empty
        "no-empty-character-class": 2,
        "no-labels": 2, // http://eslint.org/docs/rules/no-labels
        "no-eq-null": 0, // http://eslint.org/docs/rules/no-eq-null
        "no-eval": 2, // http://eslint.org/docs/rules/no-eval
        "no-ex-assign": 2, // http://eslint.org/docs/rules/no-ex-assign
        "no-extend-native": 2, // http://eslint.org/docs/rules/no-extend-native
        "no-extra-bind": 2, // http://eslint.org/docs/rules/no-extra-bind
        "no-extra-boolean-cast": 2, // http://eslint.org/docs/rules/no-extra-boolean-cast
        "no-extra-parens": 0, // http://eslint.org/docs/rules/no-extra-parens
        "no-extra-semi": 2, // http://eslint.org/docs/rules/no-extra-semi
        "no-fallthrough": 2, // http://eslint.org/docs/rules/no-fallthrough
        "no-floating-decimal": 2, // http://eslint.org/docs/rules/no-floating-decimal
        "no-func-assign": 2, // http://eslint.org/docs/rules/no-func-assign
        "no-implicit-coercion": 2, // http://eslint.org/docs/rules/no-implicit-coercion
        "no-implied-eval": 2, // http://eslint.org/docs/rules/no-implied-eval
        "no-inline-comments": 0, // http://eslint.org/docs/rules/no-inline-comments
        "no-inner-declarations": [2, "functions"], // http://eslint.org/docs/rules/no-inner-declarations
        "no-invalid-regexp": 2, // http://eslint.org/docs/rules/no-invalid-regexp
        "no-invalid-this": 2, // http://eslint.org/docs/rules/no-invalid-this
        "no-irregular-whitespace": 2, // http://eslint.org/docs/rules/no-irregular-whitespace
        "no-iterator": 2, // http://eslint.org/docs/rules/no-iterator
        "no-label-var": 2, // http://eslint.org/docs/rules/no-label-var
        "no-lone-blocks": 2, // http://eslint.org/docs/rules/no-lone-blocks
        "no-lonely-if": 0, // http://eslint.org/docs/rules/no-lonely-if
        "no-loop-func": 2, // http://eslint.org/docs/rules/no-loop-func
        "no-mixed-requires": [0, false], // http://eslint.org/docs/rules/no-mixed-requires
        "no-mixed-spaces-and-tabs": [2, false], // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
        "linebreak-style": [0, "unix"], // http://eslint.org/docs/rules/linebreak-style
        "no-multi-spaces": 2, // http://eslint.org/docs/rules/no-multi-spaces
        "no-multi-str": 2, // http://eslint.org/docs/rules/no-multi-str
        "no-multiple-empty-lines": [2, {"max": 1}], // http://eslint.org/docs/rules/no-multiple-empty-lines
        "no-native-reassign": 2, // http://eslint.org/docs/rules/no-native-reassign
        "no-negated-in-lhs": 2, // http://eslint.org/docs/rules/no-negated-in-lhs
        "no-nested-ternary": 2, // http://eslint.org/docs/rules/no-nested-ternary
        "no-new": 2, // http://eslint.org/docs/rules/no-new
        "no-new-func": 2, // http://eslint.org/docs/rules/no-new-func
        "no-new-object": 2, // http://eslint.org/docs/rules/no-new-object
        "no-new-require": 2, // http://eslint.org/docs/rules/no-new-require
        "no-new-wrappers": 2, // http://eslint.org/docs/rules/no-new-wrappers
        "no-obj-calls": 2, // http://eslint.org/docs/rules/no-obj-calls
        "no-octal": 2, // http://eslint.org/docs/rules/no-octal
        "no-octal-escape": 2, // http://eslint.org/docs/rules/no-octal-escape
        "no-param-reassign": 0, // http://eslint.org/docs/rules/no-param-reassign
        "no-path-concat": 2, // http://eslint.org/docs/rules/no-path-concat
        "no-plusplus": 0,
        "no-process-env": 0, // http://eslint.org/docs/rules/no-process-env
        "no-process-exit": 0, // http://eslint.org/docs/rules/no-process-exit
        "no-proto": 2, // http://eslint.org/docs/rules/no-proto
        "no-redeclare": 2, // http://eslint.org/docs/rules/no-redeclare
        "no-regex-spaces": 2, // http://eslint.org/docs/rules/no-regex-spaces
        "no-restricted-modules": 0, // http://eslint.org/docs/rules/no-restricted-modules
        "no-restricted-syntax": 0, // http://eslint.org/docs/rules/no-restricted-syntax
        "no-return-assign": 0, // http://eslint.org/docs/rules/no-return-assign
        "no-script-url": 0, // http://eslint.org/docs/rules/no-script-url
        "no-self-compare": 2, // http://eslint.org/docs/rules/no-self-compare
        "no-sequences": 2, // http://eslint.org/docs/rules/no-sequences
        "no-shadow": 0, // http://eslint.org/docs/rules/no-shadow
        "no-shadow-restricted-names": 2, // http://eslint.org/docs/rules/no-shadow-restricted-names
        "no-spaced-func": 2, // http://eslint.org/docs/rules/no-spaced-func
        "no-sparse-arrays": 2, // http://eslint.org/docs/rules/no-sparse-arrays
        "no-sync": 0, // http://eslint.org/docs/rules/no-sync
        "no-ternary": 0, // eslint.org/docs/rules/no-ternary
        "no-trailing-spaces": 2, // http://eslint.org/docs/rules/no-trailing-spaces
        "no-this-before-super": 2, // http://eslint.org/docs/rules/no-this-before-super
        "no-throw-literal": 2, // http://eslint.org/docs/rules/no-throw-literal
        "no-undef": 2, // http://eslint.org/docs/rules/no-undef
        "no-undef-init": 2, // http://eslint.org/docs/rules/no-undef-init
        "no-undefined": 2, // http://eslint.org/docs/rules/no-undefined
        "no-unexpected-multiline": 2, // http://eslint.org/docs/rules/no-unexpected-multiline
        "no-underscore-dangle": 0, // http://eslint.org/docs/rules/no-underscore-dangle
        "no-unneeded-ternary": 2, // http://eslint.org/docs/rules/no-unneeded-ternary
        "no-unreachable": 2, // http://eslint.org/docs/rules/no-unreachable
        "no-unused-expressions": [2, {
            "allowShortCircuit": true,
            "allowTernary": true
        }], // http://eslint.org/docs/rules/no-unused-expressions
        "no-unused-vars": [2, {"vars": "all", "args": "none"}], // http://eslint.org/docs/rules/no-unused-vars
        "no-use-before-define": 0, // http://eslint.org/docs/rules/no-use-before-define
        "no-useless-call": 0, // http://eslint.org/docs/rules/no-useless-call
        "no-useless-concat": 2, // http://eslint.org/docs/rules/no-useless-concat
        "no-void": 2, // http://eslint.org/docs/rules/no-void
        "no-var": 2, // http://eslint.org/docs/rules/no-var
        "no-warning-comments": [1, { "terms": ["todo", "fixme", "quickfix"], "location": "anywhere" }],
        "no-with": 2, // http://eslint.org/docs/rules/no-with
        "array-bracket-spacing": [2, "never"], // http://eslint.org/docs/rules/array-bracket-spacing
        "arrow-parens": 0, // http://eslint.org/docs/rules/arrow-parens
        "arrow-spacing": [2, { "before": true, "after": true }], // http://eslint.org/docs/rules/arrow-spacing
        "accessor-pairs": [2, {
            "getWithoutSet": true
        }], // http://eslint.org/docs/rules/accessor-pairs
        "block-scoped-var": 2, // http://eslint.org/docs/rules/block-scoped-var
        "block-spacing": 2, // http://eslint.org/docs/rules/block-spacing
        "brace-style": [2, "1tbs"], // http://eslint.org/docs/rules/brace-style
        "callback-return": 2, // http://eslint.org/docs/rules/callback-return
        "camelcase": [2, {"properties": "always"}], // http://eslint.org/docs/rules/camelcase
        "comma-dangle": [2, "never"], // http://eslint.org/docs/rules/comma-dangle
        "comma-spacing": [2, {"before": false, "after": true}], // http://eslint.org/docs/rules/comma-spacing
        "comma-style": [2, "last"], // http://eslint.org/docs/rules/comma-style
        "complexity": [1, {
            "max": 20
        }], // http://eslint.org/docs/rules/complexity
        "computed-property-spacing": [2, "never"], // http://eslint.org/docs/rules/computed-property-spacing
        "consistent-return": 2, // http://eslint.org/docs/rules/consistent-return
        "consistent-this": [0, "self"], // http://eslint.org/docs/rules/consistent-this
        "constructor-super": 2, // http://eslint.org/docs/rules/constructor-super
        "curly": [2, "all"], // http://eslint.org/docs/rules/curly
        "default-case": 2, // http://eslint.org/docs/rules/default-case
        "dot-location": [2, "property"], // http://eslint.org/docs/rules/dot-location
        "dot-notation": [2, { "allowKeywords": true }], // http://eslint.org/docs/rules/dot-notation
        "eol-last": 0, // http://eslint.org/docs/rules/eol-last
        "eqeqeq": [2, "smart"], // http://eslint.org/docs/rules/eqeqeq
        "func-names": 0, // http://eslint.org/docs/rules/func-names
        "func-style": [2, "declaration"], // http://eslint.org/docs/rules/func-style
        "generator-star-spacing": [2, { "before": false, "after": true }], // http://eslint.org/docs/rules/generator-star-spacing
        "global-require": 0, // http://eslint.org/docs/rules/global-require
        "guard-for-in": 0, // http://eslint.org/docs/rules/guard-for-in
        "handle-callback-err": [2, "^(err|error)$"], // http://eslint.org/docs/rules/handle-callback-err
        "id-length": 0, // http://eslint.org/docs/rules/id-length
        "indent": [2, 4, { "SwitchCase": 1 }], // http://eslint.org/docs/rules/indent
        "init-declarations": 0, // http://eslint.org/docs/rules/init-declarations
        "jsx-quotes": [2, "prefer-double"], // http://eslint.org/docs/rules/jsx-quotes
        "key-spacing": [2, { "beforeColon": false, "afterColon": true }], // http://eslint.org/docs/rules/key-spacing
        "lines-around-comment": 0, // http://eslint.org/docs/rules/lines-around-comment
        "max-depth": [0, 4],
        "max-len": [0, 80, 4],
        "max-nested-callbacks": [2, 3], // http://eslint.org/docs/rules/max-nested-callbacks
        "max-params": [0, 3],
        "max-statements": [0, 10],
        "new-cap": 2, // http://eslint.org/docs/rules/new-cap"
        "new-parens": 2, // http://eslint.org/docs/rules/new-parens
        "newline-after-var": [2, "always"], // http://eslint.org/docs/rules/newline-after-var
        "object-curly-spacing": [2, "always"], // http://eslint.org/docs/rules/object-curly-spacing
        "object-shorthand": [2, "always"], // http://eslint.org/docs/rules/object-shorthand
        "one-var": [2, "never"], // http://eslint.org/docs/rules/one-var
        "operator-assignment": [0, "always"], // http://eslint.org/docs/rules/operator-assignment
        "operator-linebreak": [2, "after"], // http://eslint.org/docs/rules/operator-linebreak
        "padded-blocks": [2, "never"], // http://eslint.org/docs/rules/padded-blocks
        "prefer-arrow-callback": 2, // http://eslint.org/docs/rules/prefer-arrow-callback
        "prefer-const": 2, // http://eslint.org/docs/rules/prefer-const
        "prefer-spread": 2, // http://eslint.org/docs/rules/prefer-spread
        "prefer-reflect": 0, // http://eslint.org/docs/rules/prefer-reflect
        "prefer-template": 0, // http://eslint.org/docs/rules/prefer-template
        "template-curly-spacing": [2, "always"], // http://eslint.org/docs/rules/template-curly-spacing
        "quote-props": [2, "as-needed"], // http://eslint.org/docs/rules/quote-props
        "quotes": [2, "double", "avoid-escape"], // http://eslint.org/docs/rules/quotes
        "radix": 0, // http://eslint.org/docs/rules/radix
        "id-match": 0, // http://eslint.org/docs/rules/id-match
        "require-jsdoc": 0, // http://eslint.org/docs/rules/require-jsdoc
        "require-yield": 2, // http://eslint.org/docs/rules/require-yield
        "semi": 2, // http://eslint.org/docs/rules/semi
        "semi-spacing": [2, {"before": false, "after": true}], // http://eslint.org/docs/rules/semi-spacing
        "sort-vars": 0, // http://eslint.org/docs/rules/sort-vars
        "keyword-spacing": [2], // http://eslint.org/docs/rules/keyword-spacing
        "space-before-blocks": [2, "always"], // http://eslint.org/docs/rules/space-before-blocks
        "space-before-function-paren": [2, { "anonymous": "always", "named": "never" }], // http://eslint.org/docs/rules/space-before-function-paren
        "space-in-parens": [2, "never"], // http://eslint.org/docs/rules/space-in-parens
        "space-infix-ops": 2, // http://eslint.org/docs/rules/space-infix-ops
        "space-unary-ops": [2, { "words": true, "nonwords": false }], // http://eslint.org/docs/rules/space-unary-ops
        "spaced-comment": [2, "always", { "exceptions": ["-"] }], // http://eslint.org/docs/rules/spaced-comment
        "strict": 0, // http://eslint.org/docs/rules/strict
        "use-isnan": 2, // http://eslint.org/docs/rules/use-isnan
        "valid-jsdoc": [2, {
            "requireParamDescription": false,
            "requireReturnDescription": false,
            "requireReturn": false, // still requires to document returns if there is a return
            "prefer": {
                "return": "returns"
            }
        }], // http://eslint.org/docs/rules/valid-jsdoc
        // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/README.md
        "jsdoc/check-param-names": 2,
        "jsdoc/check-tag-names": 2,
        "jsdoc/check-types": 2,
        "jsdoc/newline-after-description": 2,
        "jsdoc/require-description-complete-sentence": 2,
        "jsdoc/require-hyphen-before-param-description": 2,
        "jsdoc/require-param": 2,
        "jsdoc/require-param-description": 0,
        "jsdoc/require-param-type": 2,
        "jsdoc/require-returns-description": 0,
        "jsdoc/require-returns-type": 2,
        "valid-typeof": 2, // http://eslint.org/docs/rules/valid-typeof
        "vars-on-top": 2, // http://eslint.org/docs/rules/vars-on-top
        "wrap-iife": 0, // http://eslint.org/docs/rules/wrap-iife
        "wrap-regex": 0, // http://eslint.org/docs/rules/wrap-regex
        "yoda": [2, "never"] // http://eslint.org/docs/rules/yoda
    }
};
