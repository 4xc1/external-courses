function capitalLetter(str) {
  let newStr = str.toLowerCase();
  newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}

module.exports = capitalLetter;
