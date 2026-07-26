import type { NextConfig } from "next";

// GitHub Pages serves project sites from https://<user>.github.io/<repo>/ —
// everything under that path needs to be prefixed with /<repo>. Leave
// NEXT_PUBLIC_BASE_PATH unset (or empty) if this deploys to a user/org page
// (https://<user>.github.io/) instead, where no prefix is needed.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
