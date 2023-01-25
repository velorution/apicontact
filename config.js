/*
|--------------------------------------------------------------------------
| config.js - Fichier de configuration pour l'API 
|--------------------------------------------------------------------------
|
| Contient les informations d'authentification
| pour l'intégration avec SendInBlue et les
| paramètres de configuration nécessaires.
|
*/

require('dotenv').config();

const sendinblue = require('sib-api-v3-sdk');
const defaultClient = sendinblue.ApiClient.instance;

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

module.exports = {apiKey};


