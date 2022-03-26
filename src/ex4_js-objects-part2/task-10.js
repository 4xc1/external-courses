function reverse(str) {
  const newStr = str.split('');
  newStr.reverse();
  return newStr.join('');
}

module.exports = reverse;
