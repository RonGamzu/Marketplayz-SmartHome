const CentralUnit = require("./Models/CentralUnit");

const location = {
  city: "Tel Aviv",
  country: "Israel",
};

setInterval(async () => {
  await CentralUnit.getTheWeather(location.city, location.country);
  CentralUnit.sendSignal();
}, 3600000);
