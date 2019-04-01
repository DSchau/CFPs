const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const globby = require('globby')
const slugify = require('limax')

module.exports = {
  transforms: {
    PROPOSALS(_, options) {
      return globby
        .sync('content/**/*.md')
        .reverse()
        .map(file => {
          const contents = fs.readFileSync(file, 'utf8')
          const { data: meta } = matter(contents)
          const year = file.split('/').shift()
          const slug = `/${year}/${slugify(meta.title)}`
          return `- [${
            meta.title
          }](https://proposals.dustinschau.com/${slug})\n${
            meta.excerpt ? `    > ${meta.excerpt}` : ''
          }`
        }, [])
        .join('\n')
    },
  },
}
