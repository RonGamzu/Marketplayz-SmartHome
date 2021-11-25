function checkTheWeather(temp) {
  if (temp > 30) {
    return "hot";
  } else if (temp < 15) {
    return "cold";
  } else {
    return "normal";
  }
}

module.exports = checkTheWeather;