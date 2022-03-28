function filter(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) newArr.push(arr[i]);
  }
  return newArr;
}

module.exports = filter;
