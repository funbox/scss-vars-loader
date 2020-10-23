const path = require('path');

module.exports = function(source) {
  const pathParts = path.dirname(this.resourcePath).split(path.sep);

  let i = pathParts.length - 1;
  while (true) {
    if (pathParts[i][0] !== '_') return `$b: ${pathParts[i]};\n\n${source}`;
    i--;
  }
};
