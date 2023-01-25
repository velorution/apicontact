/*
|--------------------------------------------------------------------------
| Server.js 
|--------------------------------------------------------------------------
|
| Here is the server.js
| 
| 
|
*/

require('dotenv').config();

const sibApiV3Sdk = require('sendinblue-api');
const defaultClient = sibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

module.exports = {apiKey};


