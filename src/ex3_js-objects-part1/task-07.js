function deepClone(obj) {
  const newObj = {};
  const key = Object.keys(obj);
  const value = Object.values(obj);
  for (let i = 0; i < key.length; i += 1) {
    if (Array.isArray(value[i])) {
      newObj[key[i]] = [...value[i]];
    } else if (typeof (value[i]) === 'object') {
      newObj[key[i]] = deepClone(value[i]);
    } else {
      newObj[key[i]] = value[i];
    }
  }
  return newObj;
}

module.exports = deepClone;
