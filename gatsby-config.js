module.exports = {
  siteMetadata: {
    author: 'Dustin Schau',
    subTitle: 'Proposals',
    social: {
      twitter: `schaudustin`,
    },
  },
  __experimentalThemes: [
    {
      resolve: `@dschau/gatsby-theme-blog`,
      options: {
        blogContent: 'content',
        root: __dirname,
      },
    },
  ],
}
