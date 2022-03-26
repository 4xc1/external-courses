function pasteWord(str, word, num) {
  const interStr = str.split(' ');
  interStr.splice(num + 1, 0, word);
  return interStr.join(' ');
}

module.exports = pasteWord;
