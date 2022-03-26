function findInProto(name, obj) {
  const protoObj = Object.getPrototypeOf(obj);
  return protoObj[name];
}

module.exports = findInProto;
