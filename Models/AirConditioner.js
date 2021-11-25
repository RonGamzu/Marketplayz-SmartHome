const Device = require("../Models/Device");

class AirConditioner extends Device {
  constructor(name, min, max) {
    super(name);
    this.state = false;
    this.temp = 25;
    this.minTemp = min;
    this.maxTemp = max;
  }
  receiveSignal(signal) {
    console.log(`signal received by ${this.name}`);
    switch (signal) {
      case "hot":
        if (this.state === false) {
          this.state = true;
        }
        if (this.minTemp < this.temp < this.minTemp + 10) {
          this.temp = this.minTemp;
        } else {
          this.temp = this.temp - 10;
        }
        console.log(
          `${this.name}: hot now, so the temperature decreased by 10 degrees. the temperature now is ${this.temp}.`
        );
        break;
      case "cold":
        if (this.state === false) {
          this.state = true;
        }
        if (this.maxTemp - 13 < this.temp < this.maxTemp) {
          this.temp = this.maxTemp;
        } else {
          this.temp = this.temp + 13;
        }
        console.log(
          `${this.name}: cold now, so the temperature increased by 10 degrees. the temperature now is ${this.temp}.`
        );
        break;
      case "normal":
        this.temp = 25;
        this.state = false;
        console.log(
          `${this.name}: the temperature is normal now, so the air-conditioner turned off`
        );
        break;
    }
  }
}

module.exports = AirConditioner;
