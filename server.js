const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json(); 

const app = express();
const port = 3000;

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.API_KEY;

// Uncomment below two lines to configure authorization using: partner-key
// var partnerKey = defaultClient.authentications['partner-key'];
// partnerKey.apiKey = 'YOUR API KEY';

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();



app.use(bodyParser.json());
    
app.post('/send-email',jsonParser, async (req, res) => {
   console.log(JSON.stringify(req.body.mail));
  try {apiInstance.sendTransacEmail({
    "sender":{
       "email":req.body.mail,
       "name":req.body.name  
    },
    "subject":"Demande de contact de " + req.body.name,
    "htmlContent":"<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>",
    "messageVersions":[
      //Definition for Message Version 1 
      {
          "to":[
             {
                "email":"martin.aubeut@gmail.com",
                "name":req.body.name 
             }
          ],
          "htmlContent":"<!DOCTYPE html><html><body><p> L'adresse suivante a essayé de vous contacter : " + req.body.mail + "<br> Son nom est :  "  + req.body.name + "<br> Elle a laisser le message suivant : " +req.body.message +"</p></body></html>",
          "subject":"Demande de contact de " + req.body.name
       },
    ]
  })
    .then(console.log)
    .catch(console.log);
  } 
  catch (error) {
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
