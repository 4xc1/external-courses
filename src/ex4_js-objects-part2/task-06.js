function strUpper(str) {
  return str
    .split(' ')
    .map((ind) => ind[0].toUpperCase() + ind.substr(1))
    .join(' ');
}

module.exports = strUpper;
