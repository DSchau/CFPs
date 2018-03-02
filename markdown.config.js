const fs = require('fs');
const path = require('path');

module.exports = {
  transforms: {
    PROPOSALS(content, options) {
      const { path: contentPath } = options;
      const base = path.resolve(contentPath);
      const files = fs.readdirSync(base)
        .map(dir => {
          return fs.readdirSync(path.join(base, dir))
            .map(file => path.join(dir, file));
        })
        .reverse()
        .reduce((flattened, files) => {
          return flattened
            .concat('## ' + files[0].split('/').shift())
            .concat('')
            .concat(files
            .sort((a, b) => {
              return b.split('/').shift() - a.split('/').shift();
            })
            .map(file => {
              const title = file.split('/').pop().split('.md').shift();
              return `- [${title}](${contentPath}/${file})`
            }))
            .concat('');
        }, []);
      return files.join('\n');
    }
  }
};
