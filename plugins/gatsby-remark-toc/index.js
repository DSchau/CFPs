const generateTOC = require('mdast-util-toc');
const mm = require('micromatch');

module.exports = function({ markdownNode, markdownAST }, options) {
  const filePath = markdownNode.fileAbsolutePath.split(process.cwd()).pop().slice(1)
  const isIncluded = mm.isMatch(filePath, options.include || []);
  if (!isIncluded) {
    return;
  }

  const toc = generateTOC(markdownAST).map;
  const index = markdownAST.children.findIndex(node => node.type !== 'yaml');

  if (!toc || !index) {
    return;
  }

  markdownAST.children = [].concat(
    markdownAST.children.slice(0, index),
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Table of Contents'
        }
      ]
    },
    toc,
    markdownAST.children.slice(index)
  );
};
