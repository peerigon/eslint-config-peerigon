/* eslint sort-keys: ["error", "asc"] */
/* eslint-disable sort-keys */

module.exports = {
    plugins: ["node"],
    extends: ["plugin:node/recommended"],
    env: {
        node: true,
    },
    parserOptions: {
        // Most Node projects don't use Babel to preprocess JS files
        // Requiring them would be annoying
        requireConfigFile: false,
    },
    rules: {
        /* eslint-enable sort-keys */
        "node/callback-return": "warn", // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/callback-return.md
        "node/global-require": "off", // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/global-require.md
        "node/handle-callback-err": ["warn", "^(err|error)$"], // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/handle-callback-err
        "node/no-mixed-requires": [
            "warn",
            {
                allowCall: true,
                grouping: false,
            },
        ], // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-mixed-requires.md
        "node/no-new-require": "warn", // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-new-require.md
        "node/no-path-concat": "warn", // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md
        // process.exit() is often used in situations where it would have been better to either throw an error or
        // let the process exit by itself.
        // There are situations where process.exit() is the cause of truncated stdout output,
        // see https://nodejs.org/api/process.html#process_process_exit_code
        // If you want to set the exit code, you can also use process.exitCode.
        // Disable this rule if you have to exit the process forcefully and you know what you're doing.
        "node/no-process-exit": "warn", // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md
        /* eslint-disable sort-keys */
    },
};
