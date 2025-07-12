import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators : false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ]
  }
};

export default nextConfig;
