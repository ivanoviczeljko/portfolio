const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  output: 'export', // Required for static export
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true, // Required for static export
  },
}