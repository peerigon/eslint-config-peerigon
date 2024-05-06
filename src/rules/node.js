/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

import nodePlugin from "eslint-plugin-n";

export default [
    nodePlugin.configs["flat/recommended-module"],
    {
        name: "eslint-config-peerigon/node",
        rules: {
            /* eslint-enable sort-keys */
            "n/callback-return": "warn", // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/callback-return.md
            "n/global-require": "off", // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
            "n/handle-callback-err": ["warn", "^(err|error)$"], // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err
            "n/no-mixed-requires": [
                "warn",
                {
                    allowCall: true,
                    grouping: false,
                },
            ], // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-mixed-requires.md
            "n/no-new-require": "warn", // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
            "n/no-path-concat": "warn", // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
            // process.exit() is often used in situations where it would have been better to either throw an error or
            // let the process exit by itself.
            // There are situations where process.exit() is the cause of truncated stdout output,
            // see https://nodejs.org/api/process.html#process_process_exit_code
            // If you want to set the exit code, you can also use process.exitCode.
            // Disable this rule if you have to exit the process forcefully and you know what you're doing.
            "n/no-process-exit": "warn", // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
            /* eslint-disable sort-keys */
        },
    },
];
