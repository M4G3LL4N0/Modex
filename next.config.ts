import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    optimizePackageImports: [
      '@supabase/supabase-js',
      'openai'
    ]
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
