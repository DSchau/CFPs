const slugify = require('limax');

module.exports = function onCreateNode({
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
        value: `/${year}/${slugify(node.frontmatter.title)}`
      });
      createNodeField({ node, name: 'year', value: year });
      createNodeField({ node, name: 'type', value: 'proposal' });
    }
  }
};
