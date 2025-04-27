/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export needed for gh-pages
  assetPrefix: '/portfolio/',
  basePath: '/portfolio',
  trailingSlash: true, // optional but good
  images: {
    unoptimized: true, // because images optimization requires server
  },
}

module.exports = nextConfig
