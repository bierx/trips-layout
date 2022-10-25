const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-controls",
        "@storybook/addon-knobs",
        "storybook-addon-styled-component-theme/dist/register",
    ],
    webpackFinal: async (config) => {
        config.resolve.plugins = [
            ...(config.resolve.plugins || []),
            new TsconfigPathsPlugin(),
        ];

        return config;
    },
};
