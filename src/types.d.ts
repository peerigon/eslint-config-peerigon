declare module "eslint-plugin-react" {
  const config: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rules: { [name: string]: any };
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rules: { [name: string]: any };
  };

  export default config;
}
