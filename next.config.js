module.exports = {
  output: 'export',  // Required for static export
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  trailingSlash: true
}