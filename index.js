const path = require('path');

module.exports = function(source) {
  const resourceDir = path.dirname(this.resourcePath);
  const blockName = findBlockName(resourceDir);

  if (blockName) {
    return `$b: ${blockName};\n\n${source}`;
  }

  return source;
};

function findBlockName(dir) {
  const name = path.basename(dir);

  if (!name.match(/^_/)) {
    return name;
  }

  return findBlockName(path.join(dir, '..'));
}
