import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allowed development origins
  // If using a newer Next.js version that expects this under `experimental`,
  // adjust accordingly. For now keep at top-level if supported.
  allowedDevOrigins: ['127.0.0.1'],
};

export default nextConfig;
