
const axios = require('axios');


requestAPIs = async (endPoint) => {
 console.log('ENDPOINT'.yellow, endPoint);
 try {
  const response = await axios.get(endPoint);
 // console.log('response del axios'.bgRed, response.data);
  return {data: response.data, ok : true};
 }
 catch (err) {
  return {ok: false, ErrorCode: err.code, status: 500, message: err.message};
 };

}




module.exports = {
 requestAPIs
}