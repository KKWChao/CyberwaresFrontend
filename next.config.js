/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // add the following snippet
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
