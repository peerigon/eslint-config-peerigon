"use strict";

module.exports = {
    plugins: ["@trivago/prettier-plugin-sort-imports"],
    importOrder: ["^node:", "<THIRD_PARTY_MODULES>", "^[./]"],
};
