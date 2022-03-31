function reduce(arr, callback, initialValue) {
  let previousValue;
  if (initialValue) {
    previousValue = initialValue;
  } else {
    previousValue = arr[0];
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (!initialValue) {
      if (arr[i + 1] !== undefined) {
        previousValue = callback(i === 0 ? arr[i] : previousValue, arr[i + 1], i, arr);
      }
    } else {
      previousValue = callback(previousValue, arr[i], i, arr);
    }
  }
  return previousValue;
}

module.exports = reduce;
