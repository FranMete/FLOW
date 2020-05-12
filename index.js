const express = require('express');
const bodyParser = require('body-parser');
const configs = require('./config/index');
const app = express();
const config = configs[app.get('env')];
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next), () => {
 if (app.get('env') != 'developement') {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  config.ipApiURL = config.ipApiURL + ip;
  console.log('SOY IP ', config.ipApiURL);
 }
 next()
})


app.listen(config.PORT, () => console.log(`servidor corriendo en puerto ${config.PORT}`));

app.use('/v1', routes(config));

module.exports = app;