const express = require('express');
const app = express();
const router = express.Router();
const allControllers = require('../controllers/all-controller');

module.exports = (config) => {

 router.use((req, res, next) => {
  req.config = config;
  next()
 })

 router.get('/location', allControllers.location);
 router.get('/current', allControllers.current);
 router.get('/forecast', allControllers.forecast);




 return router;
}