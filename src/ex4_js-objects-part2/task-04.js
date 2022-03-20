function capitalLetter(str) {
  str.toLowerCase();
  const newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}

module.exports = capitalLetter;
