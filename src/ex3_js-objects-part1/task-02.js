function getKeys(obj) {
  const objKeys = Object.entries(obj);
  objKeys.forEach(([key, prop]) => console.log(`${key}: ${prop}`));
  // Линтер выдает ошибку по пустому return
  // eslint-disable-next-line no-useless-return
  return;
}

module.exports = getKeys;
