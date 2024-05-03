/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

import { globPatterns } from "../glob-patterns.js";

export default {
    rules: {
        "import/no-default-export": "warn",
    },
    overrides: [
        {
            files: globPatterns.react,
            rules: {
                "import/no-default-export": "off",
            },
        },
    ],
};
