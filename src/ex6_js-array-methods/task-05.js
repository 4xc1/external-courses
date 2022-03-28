function map(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

module.exports = map;
