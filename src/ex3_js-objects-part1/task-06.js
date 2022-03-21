function getProperty(object, propertyPath) {
  const keyStr = propertyPath.split('.');
  let key = Object.keys(object);
  let value = Object.values(object);
  let newValue;
  let propertyIsFind = false;
  for (let i = 0; i < key.length; i += 1) {
    for (let j = 0; j < key.length; j += 1) {
      if (key[j] === keyStr[0]) {
        propertyIsFind = true;
        newValue = value[j];
        value = Object.values(newValue);
        key = Object.keys(newValue);
        keyStr.shift();
        break;
      }
    }
  }
  if (propertyIsFind) {
    return value[0];
  } return undefined;
}

module.exports = getProperty;
