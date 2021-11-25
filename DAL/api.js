const fetch = require("node-fetch");

const Switch = require("../Models/Switch");
const AirConditioner = require("../Models/AirConditioner");
const WaterHeater = require("../Models/WaterHeater");
const Person = require("../Models/Person");

const avi = new Person("Avi", 120);
const Ron = new Person("Ron", 5);
const Gal = new Person("Gal", 90);
const Dan = new Person("Dan", 220);

const partners = [avi, Ron, Gal, Dan];

const kitchenLight = new Switch("kitchenLight");
const bedroomAirConditioner = new AirConditioner(
  "bedroomAirConditioner",
  15,
  38
);
const water = new WaterHeater("watwaterHeaterer");

const devices = [kitchenLight, bedroomAirConditioner, water];

async function getWeatherData(city, country) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=ee72fcee4283d5dd12588cb4cfb6523d`
    );
    data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { partners, devices, getWeatherData };
