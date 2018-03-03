const path = require('path');

module.exports = async function createPages({
  graphql,
  boundActionCreators
}) {
  const { createPage } = boundActionCreators;

  const proposalTemplate = path.resolve('src/templates/proposal.js');

  const { data: content } = await graphql(`
    {
      proposals: allMarkdownRemark(
        filter: { fields: { type: { eq: "proposal" } } }
      ) {
        edges {
          node {
            fields {
              slug
              year
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const { proposals } = content;

  proposals.edges.forEach(({ node }) => {
    const { slug, year } = node.fields;
    createPage({
      path: slug,
      component: proposalTemplate,
      context: {
        slug,
        year
      }
    });
  });
};
