declare module "@babel/eslint-parser" {
    export const parse = any;
    export const parseForEslint = any;
}

declare module "@babel/eslint-plugin" {
    export default {
        rules: any,
    };
}

declare module "eslint-plugin-optimize-regex" {
    export default {
        rules: any,
        configs: {
            recommended: any,
            all: any,
        },
    };
}

declare module "eslint-plugin-promise" {
    export default {
        rules: any,
        configs: {
            recommended: any,
        },
    };
}

declare module "eslint-plugin-no-unsafe-regex" {
    export default {
        rules: any,
    };
}
