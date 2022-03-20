function random() {
  const randomNum = Math.random() * 100;
  return +randomNum.toFixed();
}

module.exports = random;
