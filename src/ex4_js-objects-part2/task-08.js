function toLowerCamelCase(str) {
  const interStr = str
    .toLowerCase()
    .split(' ')
    .map((ind) => ind[0].toUpperCase() + ind.slice(1))
    .join('');
  return interStr[0].toLowerCase() + interStr.slice(1);
}

module.exports = toLowerCamelCase;
