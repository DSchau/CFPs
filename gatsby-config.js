const path = require('path');
const fs = require('fs');

const proposals = fs.readdirSync(path.resolve('content')).map(folder => ({
  resolve: 'gatsby-source-filesystem',
  options: {
    path: path.join(__dirname, 'content', folder),
    name: `Proposals${folder}`
  }
}));

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    {
          resolve: 'gatsby-plugin-typography',
          options: {
            pathToConfigModule: 'src/util/typography',
          },
        },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-images']
      }
    },
  ].concat(proposals)
};
