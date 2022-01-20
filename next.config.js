/** @type {import("next").NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"]
  },
  generateBuildId: async () => {
    return require("uuid").v4();
  }
};
