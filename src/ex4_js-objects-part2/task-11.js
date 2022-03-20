function counter(str) {
  const resValue = {};
  const arrStr = str.split('');
  let count;
  for (let i = 0; i < arrStr.length - 1; i += 1) {
    if (resValue[arrStr[i]]) {
      count = resValue[arrStr[i]];
    } else count = 0;
    resValue[arrStr[i]] = count + 1;
  }
  console.log(Object.keys(resValue).forEach((key) => console.log(`${key} =  ${resValue[key]}`)));
}

module.exports = counter;
