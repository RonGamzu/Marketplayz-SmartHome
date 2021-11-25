// import Device from './Device'
const Device = require('../Models/Device')

class Switch extends Device {
    constructor(name) {
      super(name);
      this.light = false;
    }
    receiveSignal(signal) {
      console.log(`signal received by ${this.name}`);
      switch (signal) {
        case "hot":
          this.light = false;
          console.log(`${this.name}: hot now, so the light turned off.`);
          break;
        case "cold":
          this.light = true;
          console.log(`${this.name}: cold now, so the light turned off.`);
          break;
      }
    }
  }

  module.exports =Switch