import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ← THIS makes it 100% static HTML/CSS/JS
  images: {
    unoptimized: true, // ← Required for static export
  },
  trailingSlash: true, // ← Clean URLs like /chapter-1/tauheed/
};

export default nextConfig;
