require('colors');
const reqApi = require('./reqApis');



getWeatherURL = async (req, querys, ipApiUrl) => {
 // devuelve URL para consultar a openWeather según venga o no parámetro 'city'
 if (Object.keys(querys).length) {
  const city = querys.city;
  const latLongURL = req.config.latLonApiURL(city, req.config.latLongApiKey)
  try {
   const queryCity_ = await reqApi.requestAPIs(latLongURL);
   const queryCity = queryCity_.data;
   if(queryCity.results.length == 0) return {ok: false, status:404, message: ` / ${city} / not found` }
   const { lat, lng } = queryCity.results[0].geometry;
   return { url: req.config.weatherApiURL(lat, lng, ''), city: queryCity.results[0].components , ok: true, status: 200 };
  }
  catch (err) {
   console.log('ERR'.red, err.message);
   return {ok: false};
  };
 } else {
  const queryLocals_ = await reqApi.requestAPIs(ipApiUrl);
  const queryLocals = queryLocals_.data;
  if (queryLocals.status !== 'success') return { ok: false, status: queryLocals.status || 500, message:  'problem ocurred' };
  const { lat, lon } = queryLocals;
  const city = queryLocals.city;
  return { url: req.config.weatherApiURL(lat, lon, ''), city: queryLocals, ok: true };
 };
}

module.exports = {
 getWeatherURL
}