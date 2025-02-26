/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, {isServer}) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },

};

export default nextConfig;
