import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "forkify-api.herokuapp.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
