/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages (the Pages workflow also injects this).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
