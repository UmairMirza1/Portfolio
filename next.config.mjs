/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages (the Pages workflow also injects this).
  output: "export",
  images: { unoptimized: true },
  // Emit /work/<slug>/index.html so pages resolve on any static host.
  trailingSlash: true,
};

export default nextConfig;
