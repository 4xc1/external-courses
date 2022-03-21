function findProp(str, obj) {
  const key = Object.keys(obj);
  for (let i = 0; i < key.length; i += 1) {
    if (key[i] === str) {
      return true;
    }
  }
  return false;
}

module.exports = findProp;
