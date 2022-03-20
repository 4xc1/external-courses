function findStr(str, serchStr) {
  const valueFind = str.includes(serchStr);
  if (valueFind) {
    return true;
  }
  return false;
}

module.exports = findStr;
