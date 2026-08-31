import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/funnel",
        destination: "/get-strong",
        permanent: true,
      },
      {
        source: "/funnel/:path*",
        destination: "/get-strong/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
