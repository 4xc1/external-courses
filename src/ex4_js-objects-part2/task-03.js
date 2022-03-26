function deliteSpace(str) {
  const arr = str.split('');
  if (arr[0] === ' ' && arr[str.length - 1] === ' ') {
    const newArr = arr.slice(1, str.length - 1)
      .join('');
    return newArr;
  }
  return str;
}

module.exports = deliteSpace;
