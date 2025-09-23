import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // Ensure Turbopack runs from the correct project root (useful in monorepos)
  turbopack: {
    root: path.resolve(__dirname),
  },
  /* config options here */
};

export default nextConfig;
