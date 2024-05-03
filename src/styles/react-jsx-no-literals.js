/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

import { globPatterns } from "../glob-patterns.js";

export default {
    rules: {
        /* eslint-enable sort-keys */
        // If we don't adjust this rule, it would autofix the escape hatch
        // {"some string"} allowed by "jsx-no-literals"
        "react/jsx-curly-brace-presence": [
            "warn",
            {
                children: "always",
                props: "never",
            },
        ],
        "react/jsx-no-literals": "warn", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
        /* eslint-disable sort-keys */
    },
    overrides: [
        {
            files: globPatterns.tests,
            rules: {
                /* eslint-enable sort-keys */
                // It's quite common in tests to use example strings
                "react/jsx-curly-brace-presence": ["warn", "never"],
                "react/jsx-no-literals": "off",
                /* eslint-disable sort-keys */
            },
        },
    ],
};
