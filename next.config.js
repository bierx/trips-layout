"use strict";
/**
 * @type {import('next').NextConfig}
 */

const nextTranslate = require("next-translate");

const nextConfig = nextTranslate({
    reactStrictMode: true,
    images: {
        domains: ["as1.ftcdn.net"],
    },
});

module.exports = nextConfig;
