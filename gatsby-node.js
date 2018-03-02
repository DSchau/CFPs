const path = require('path');
const slugify = require('limax');

exports.createPages = async function createPages({
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

exports.onCreateNode = function onCreateNode({
  node,
  boundActionCreators,
  getNode
}) {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const { sourceInstanceName: type } = getNode(node.parent);

    if (type.includes('Proposal')) {
      const year = parseInt(type.split('Proposals').pop(), 10);

      createNodeField({
        node,
        name: 'slug',
        value: `/proposals/${year}/${slugify(node.frontmatter.title)}`
      });
      createNodeField({ node, name: 'year', value: year });
      createNodeField({ node, name: 'type', value: 'proposal' });
    }
  }
};
