/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sandpack-bundler.vercel.app",
        port: "",
        pathname: "/img/take-it-easy.png",
      },
    ],
  },
};

module.exports = nextConfig;
