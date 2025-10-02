import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/tokenapprovalchecker",
        permanent: true, // Set to false if this is temporary
      },
    ];
  },
};

export default nextConfig;
