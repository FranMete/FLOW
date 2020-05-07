require('colors');
const reqApi = require('../helpers/reqApis');
const main = require('../helpers/Main');

location = async (req, res) => {
 const ipApiUrl = req.config.ipApiURL;
 const consult = ipApiUrl;
 const query_ = await reqApi.requestAPIs(consult);
 const query = query_.data;
 if (query.status != 'success') return res.status(500).json({ message: query.message })

 return res.status(200).json({ message: 'TODO OK', location: query });
};

current = async (req, res) => {

 /// consulta a openWeather API
 const querys = req.query;
 const ipApiUrl = req.config.ipApiURL;
 // obtener la URL para consultar el tiempo según si viene o no el parámetro 'city'
 const weatherURL = await main.getWeatherURL(req, querys, ipApiUrl);
 if (!weatherURL.ok) { return res.status(weatherURL.status).json({ message: weatherURL.message, err: weatherURL.data }) }
 try {
  const queryWeather_ = await reqApi.requestAPIs(weatherURL.url);
  const queryWeather = queryWeather_.data;
  if (!queryWeather_.ok) { console.log('ERROR'.red) };
  //res.status(200).json({ message: 'TODO OK'});
  return res.status(200).json({ message: 'TODO OK', location: weatherURL.city, lat: queryWeather.lat, lon: queryWeather.lon, currentWeather: queryWeather.current });
 }
 catch (err) {
  return res.status(500).json({ message: 'Hubo un problema' })
 };
}

forecast = async (req, res) => {
 const querys = req.query;
 const ipApiUrl = req.config.ipApiURL;
 // obtener la URL para consultar el tiempo según si viene o no el parámetro 'city'
 const weatherURL = await main.getWeatherURL(req, querys, ipApiUrl);
 if (!weatherURL.ok) { return res.status(weatherURL.status).json({ message: weatherURL.message, err: weatherURL.data }) }
 try {
  const queryWeather_ = await reqApi.requestAPIs(weatherURL.url);
  const queryWeather = queryWeather_.data;
  if (!queryWeather_.ok) { console.log('ERROR'.red); return res.status(500).json({ message: 'Ocurrió  un error', ok: queryWeather }) };
  //quitar los dos días sobrantes
  queryWeather.daily.splice(queryWeather.daily.length - 2);
  //convertir la fecha de los días a string (para legibilidad)
  queryWeather.daily.forEach((day, i) => {
   let unix = day.dt;
   dateObj = new Date(unix * 1000);
   utcString = dateObj.toUTCString();
   day.dt = utcString
  })
  return res.status(200).json({ message: 'TODO OK', location: weatherURL.city, lat: queryWeather.lat, lon: queryWeather.lon, next5_Weather: queryWeather.daily });
 }
 catch (err) {
  return res.status(500).json({ message: 'Hubo un problema' })
 };
};

module.exports = {
 location,
 current,
 forecast
}