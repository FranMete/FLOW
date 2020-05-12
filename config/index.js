const path = require('path');

module.exports = {
  development: {

    PORT: process.env.PORT || 8080,
    ipApiURL: 'http://ip-api.com/json/',
    weatherApiURL: (lat, lon, excl) => { return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
    exclude=${excl}&appid=18d44c1237a2702d7d5bb10d960c167b`},
    latLonApiURL: (city, key) => { return `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${key}`},
    latLongApiKey: 'd0f6098fcad54853abf8875bfe222789',
    weatherApiKey: '18d44c1237a2702d7d5bb10d960c167b'
  },
  production: {
    PORT: process.env.PORT || process.env.NODE_PORT,
    ipApiURL: 'http://ip-api.com/json/',
    weatherApiURL: (lat, lon, excl) => { return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
    exclude=${excl}&appid=18d44c1237a2702d7d5bb10d960c167b`},
    latLonApiURL: (city, key) => { return `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${key}`},
    latLongApiKey: 'd0f6098fcad54853abf8875bfe222789',
    weatherApiKey: '18d44c1237a2702d7d5bb10d960c167b'
  },
};


