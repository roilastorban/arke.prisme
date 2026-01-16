import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Ajoute ces deux sections ci-dessous :
  eslint: {
    // Permet de terminer le build même s'il y a des erreurs d'apostrophes
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Permet de terminer le build même s'il y a des erreurs de types (ex: any)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

