/* eslint-disable func-names */
function ElcticalAppliances(name, power, switched) {
  this.name = name;
  this.power = power;
  this.switched = switched;
}
ElcticalAppliances.prototype.switchOn = function () {
  this.switched = true;
  console.log('the device is switched on');
};
ElcticalAppliances.prototype.switchOff = function () {
  this.switched = false;
  console.log('the device is switched off');
};

function VacuumCleaner(name, power, switched, cleaningMode) {
  ElcticalAppliances.call(this, name, power, switched);
  this.cleaningMode = cleaningMode;
}
VacuumCleaner.prototype = Object.create(ElcticalAppliances.prototype);
VacuumCleaner.prototype.constructor = VacuumCleaner;
VacuumCleaner.prototype.wetMode = function () {
  if (this.switched === true) {
    this.cleaningMode = 'wet';
    console.log('wet mode on');
  }
};
VacuumCleaner.prototype.dryMode = function () {
  if (this.switched === true) {
    this.cleaningMode = 'dry';
    console.log('dry mode on');
  }
};
VacuumCleaner.prototype.info = function () {
  if (this.switched === true) {
    console.log(`name of the electrical appliance - ${this.name}, power = ${this.power}%, cleaningMode: ${this.cleaningMode}`);
  }
};

function RobotCleaner(name, power, switched, cleaningMode, map) {
  ElcticalAppliances.call(this, name, power, switched);
  this.cleaningMode = cleaningMode;
  this.map = map;
}
RobotCleaner.prototype = Object.create(ElcticalAppliances.prototype);
RobotCleaner.prototype.constructor = RobotCleaner;
RobotCleaner.prototype.mapScane = function () {
  if (this.switched === true) {
    this.map = true;
    console.log('robot scans the territory');
  }
};
RobotCleaner.prototype.deliteMap = function () {
  if (this.switched === true) {
    this.map = false;
    console.log('map removed');
  }
};
RobotCleaner.prototype.wetMode = function () {
  if (this.switched === true) {
    this.cleaningMode = 'wet';
    console.log('wet mode on');
  }
};
RobotCleaner.prototype.dryMode = function () {
  if (this.switched === true) {
    this.cleaningMode = 'dry';
    console.log('dry mode on');
  }
};
RobotCleaner.prototype.info = function () {
  if (this.switched === true) {
    console.log(`name of the electrical appliance - ${this.name}, power = ${this.power}%, cleaningMode: ${this.cleaningMode}, map condition: ${this.map}`);
  }
};

function RobotSoldier(name, power, switched, fireMode, map) {
  ElcticalAppliances.call(this, name, power, switched);
  this.fireMode = fireMode;
  this.map = map;
}
RobotSoldier.prototype = Object.create(ElcticalAppliances.prototype);
RobotSoldier.prototype.constructor = RobotSoldier;
RobotSoldier.prototype.fireOn = function () {
  if (this.swiched === true) {
    this.fireMode = 'fire in opened';
    console.log('robot opened fire');
  }
};
RobotSoldier.prototype.fireOff = function () {
  if (this.switched === true) {
    this.fireMode = 'fire is closed';
    console.log('robot closed fire');
  }
};
RobotSoldier.prototype.mapScan = function () {
  if (this.switched === true) {
    this.map = true;
    console.log('robot scans the territory');
  }
};
RobotSoldier.prototype.deliteMap = function () {
  if (this.switched === true) {
    this.map = false;
    console.log('map removed');
  }
};
RobotSoldier.prototype.info = function () {
  if (this.switched === true) {
    console.log(`name of the electrical appliance - ${this.name}, power = ${this.power}%, fireMode: ${this.fireMode}, map condition: ${this.map}`);
  }
};
RobotSoldier.prototype.fireInfo = function () {
  if (this.switched === true) {
    console.log(`fireMode: ${this.fireMode}`);
  }
};
