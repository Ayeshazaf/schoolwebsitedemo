import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators : false,
  images: {
    domains: [
      "randomuser.me",
      "upload.wikimedia.org"
    ]
  }
};

export default nextConfig;
