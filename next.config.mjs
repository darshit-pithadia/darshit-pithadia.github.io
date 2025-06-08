const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: 'https://darshit-pithadia.github.io/',
  basePath: '',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
