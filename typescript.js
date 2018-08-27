/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    parser: "typescript-eslint-parser",
    plugins: [
        "typescript"
    ],
    settings: {
        "import/resolver": {
            "node": true,
            "typescript": true
        }
    },
    rules: {
        /* eslint-enable sort-keys */
        "no-undef": "off", // produces false positive with some TypeScript syntax. This is caught by TypeScript anyway.
        "typescript/adjacent-overload-signatures": "error", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/adjacent-overload-signatures.md
        "typescript/class-name-casing": "error", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/class-name-casing.md
        "typescript/explicit-function-return-type": "off", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/explicit-function-return-type.md
        "typescript/explicit-member-accessibility": "off", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/explicit-member-accessibility.md
        // There are good reasons why interfaces should not be prefixed
        // https://stackoverflow.com/questions/31876947/confused-about-the-interface-and-class-coding-guidelines-for-typescript/41967120#comment75349088_41967120
        "typescript/interface-name-prefix": ["error", "never"], // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/interface-name-prefix.md
        "typescript/member-delimiter-style": ["error", {
            delimiter: "semi",
            ignoreSingleLine: false,
            requireLast: true,
        }], // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/member-delimiter-style.md
        "typescript/member-naming": "off", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/member-naming.md
        "typescript/member-ordering": "error", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/member-ordering.md
        "typescript/no-angle-bracket-type-assertion": "error", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-angle-bracket-type-assertion.md
        "typescript/no-array-constructor": "error", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-array-constructor.md
        "typescript/no-empty-interface": "off", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-empty-interface.md
        "typescript/no-explicit-any": "warn", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-explicit-any.md
        "typescript/no-inferrable-types": "error", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-inferrable-types.md
        "typescript/no-namespace": "error", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-namespace.md
        "typescript/no-non-null-assertion": "error", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-non-null-assertion.md
        "typescript/no-parameter-properties": "off", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-parameter-properties.md
        "typescript/no-triple-slash-reference": "error", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-triple-slash-reference.md
        "typescript/no-type-alias": "off", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-type-alias.md
        "typescript/no-unused-vars": "error", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-unused-vars.md
        "typescript/no-use-before-define": "error", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-use-before-define.md
        "typescript/no-var-requires": "off", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-var-requires.md
        "typescript/prefer-namespace-keyword": "off", // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/prefer-namespace-keyword.md
        "typescript/type-annotation-spacing": "error" // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/type-annotation-spacing.md
    },
    /* eslint-disable sort-keys */
    overrides: [
        {
            "files": ["*.d.ts"],
            "rules": {
                "import/unambiguous": "off", // produces false positive with some TypeScript syntax
                "import/export": "off" // produces false positive with some TypeScript syntax
            }
        }
    ],
};
