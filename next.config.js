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
      {
        protocol: "https",
        hostname: "song-storage82228-dev.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/public/**",
      },
    ],
  },
};

module.exports = nextConfig;
