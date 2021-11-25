const Device = require("../Models/Device");
const API = require("../DAL/api");
const ifSomeoneIsComingBack = require("../Utilities/ifSomeoneIsComingBack");

class WaterHeater extends Device {
  constructor(name) {
    super(name);
    this.state = false;
  }
  receiveSignal(signal) {
    console.log(`signal received by ${this.name}`);
    switch (signal) {
      case "cold":
        const somebodyIsBack = ifSomeoneIsComingBack(API.partners);
        if (somebodyIsBack) {
          this.state = true;
          console.log(`${this.name}: the waterHeater turned on`);
          setTimeout(() => {
            this.state = false;
            console.log(
              `${this.name}: after 25 minutes, the waterHeater turned off`
            );
          }, 1500000);
        }
        break;
    }
  }
}
module.exports = WaterHeater;
