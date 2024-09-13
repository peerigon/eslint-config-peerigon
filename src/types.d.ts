/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "eslint-plugin-react" {
  const config: {
    rules: { [name: string]: any };
    languageOptions: { [name: string]: any };
  };

  export default {
    configs: {
      flat: {
        recommended: config,
        ["jsx-runtime"]: config,
      },
    },
  };
}

declare module "eslint-plugin-prefer-arrow" {
  const config: {
    rules: { [name: string]: any };
  };

  export default config;
}
