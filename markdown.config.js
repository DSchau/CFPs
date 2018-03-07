const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const slugify = require('limax');

module.exports = {
  transforms: {
    PROPOSALS(content, options) {
      const { path: contentPath } = options;
      const base = path.resolve(contentPath);
      const files = fs
        .readdirSync(base)
        .filter(file => fs.statSync(path.join(base, file)).isDirectory())
        .map(dir => {
          return fs
            .readdirSync(path.join(base, dir))
            .map(file => path.join(dir, file));
        })
        .reverse()
        .reduce((flattened, files) => {
          return flattened
            .concat('## ' + files[0].split('/').shift())
            .concat('')
            .concat(
              files
                .sort((a, b) => {
                  return b.split('/').shift() - a.split('/').shift();
                })
                .map(file => {
                  const parsed = fs.readFileSync(
                    path.join(contentPath, file),
                    'utf8'
                  );
                  const meta = matter(parsed);
                  const year = file.split('/').shift();
                  const slug = `proposals/${year}/${slugify(meta.data.title)}`;
                  return `- [${
                    meta.data.title
                  }](https://proposals.dustinschau.com/${slug})`;
                })
            )
            .concat('');
        }, []);
      return files.join('\n');
    }
  }
};
