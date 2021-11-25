const checkTheWeather = require("../Utilities/checkTheWeather");
const API = require("../DAL/api");

class CentralUnit {
  static temp;
  static async getTheWeather(city, country) {
    const data = await API.getWeatherData(city, country);
    this.temp = data.main.temp;
  }
  static async sendSignal() {
    const signal = checkTheWeather(this.temp);
    console.log("the sigal is: ", signal);
    API.devices.forEach((device) => device.receiveSignal(signal));
  }
}

module.exports = CentralUnit;
