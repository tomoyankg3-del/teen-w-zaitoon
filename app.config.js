// Keep local previews at /, and use the repository path on GitHub Pages.
module.exports = ({ config }) => ({
  ...config,
  experiments: {
    ...config.experiments,
    baseUrl: process.env.GITHUB_PAGES_BASE_URL || '',
  },
});
