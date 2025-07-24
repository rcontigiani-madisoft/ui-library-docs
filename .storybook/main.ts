import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        exclude: [
          "side-channel",
          "side-channel-list",
          "side-channel-map",
          "side-channel-weakmap",
          "get-intrinsic",
          "get-proto",
          "big.js",
          "emojis-list",
        ],
      },
      build: {
        commonjsOptions: {
          include: /node_modules/,
          transformMixedEsModules: true,
        },
      },
    });
  },
};
export default config;
