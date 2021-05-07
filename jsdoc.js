/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

module.exports = {
    plugins: ["jsdoc"],
    overrides: [
        {
            files: "*.ts{,x}",
            rules: {
                "jsdoc/no-types": "warn", // JSDoc types are not necessary when using TypeScript
                "jsdoc/require-param": "off",
                "jsdoc/require-param-type": "off",
                "jsdoc/require-returns": "off",
                "jsdoc/require-returns-type": "off",
            },
        },
    ],
    rules: {
        // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/README.md
        "jsdoc/check-access": "warn",
        "jsdoc/check-alignment": "warn",
        "jsdoc/check-examples": "warn",
        "jsdoc/check-indentation": "warn",
        "jsdoc/check-param-names": "warn",
        "jsdoc/check-property-names": "warn",
        "jsdoc/check-syntax": "off",
        "jsdoc/check-tag-names": [
            "warn",
            {
                definedTags: ["swagger"],
            },
        ],
        "jsdoc/check-types": "warn",
        "jsdoc/check-values": "off",
        "jsdoc/empty-tags": "warn",
        "jsdoc/implements-on-classes": "off",
        "jsdoc/match-description": "off",
        "jsdoc/newline-after-description": "warn",
        "jsdoc/no-bad-blocks": "warn",
        "jsdoc/no-defaults": "warn",
        "jsdoc/no-types": "off",
        "jsdoc/no-undefined-types": "warn",
        "jsdoc/require-description": "off",
        "jsdoc/require-description-complete-sentence": "off",
        "jsdoc/require-example": "off",
        "jsdoc/require-file-overview": "off",
        "jsdoc/require-hyphen-before-param-description": "warn",
        "jsdoc/require-jsdoc": "off",
        "jsdoc/require-param": "warn",
        "jsdoc/require-param-description": "off",
        "jsdoc/require-param-name": "off",
        "jsdoc/require-param-type": "warn",
        "jsdoc/require-property": "off",
        "jsdoc/require-property-description": "off",
        "jsdoc/require-property-name": "warn",
        "jsdoc/require-property-type": "warn",
        "jsdoc/require-returns": "warn",
        "jsdoc/require-returns-check": "warn",
        "jsdoc/require-returns-description": "off",
        "jsdoc/require-returns-type": "warn",
        "jsdoc/valid-types": "warn",
    },
};
