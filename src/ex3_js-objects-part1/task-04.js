function addProp(str, obj) {
  const newObj = { ...obj };
  if (!(newObj.hasOwnProperty(str))) {
    newObj[str] = 'new';
  }
  return newObj;
}

module.exports = addProp;
