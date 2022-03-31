function slice(arr, begin, end) {
  const newArr = [];
  if (end) {
    if (begin >= 0 && end > begin) {
      for (let i = begin; i < end; i += 1) {
        if (i === arr.length) break;
        newArr.push(arr[i]);
      }
    } else if (begin >= 0) {
      for (let i = begin; i < arr.length + end; i += 1) {
        newArr.push(arr[i]);
      }
    } else if (end < 0) {
      for (let i = begin + arr.length; i < end + arr.length; i += 1) {
        newArr.push(arr[i]);
      }
    } else {
      let revArr = arr.length + begin;
      if (revArr < 0) {
        revArr = 0;
      }
      for (let i = revArr; i < end; i += 1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  if (begin >= 0) {
    for (let i = begin; i < arr.length && i >= 0; i += 1) {
      newArr.push(arr[i]);
    }
  } else {
    for (let i = 0; i < arr.length && i >= 0; i += 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

module.exports = slice;
