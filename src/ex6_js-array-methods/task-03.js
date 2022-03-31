function every(arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!callback(arr[i], i, arr)) return false;
  }
  return true;
}

module.exports = every;
