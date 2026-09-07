import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local SVG placeholders (project/avatar art) + keeps next/image usable
    // if this ever moves to `next build && next export`.
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

export default nextConfig;
