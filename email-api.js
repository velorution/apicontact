const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;
require('dotenv').config();

const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

async function sendEmail(data) {
  return apiInstance.sendTransacEmail({
    sender: {
      email: data.mail,
      name: data.name,
    },
    subject: 'Demande de contact de ' + data.name,
    htmlContent:
      '<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>',
    messageVersions: [
      {
        to: [
          {
            email: 'martin.aubeut@gmail.com',
            name: data.name,
          },
        ],
        htmlContent:
          '<!DOCTYPE html><html><body><p> L\'adresse suivante a essayé de vous contacter : ' +
          data.mail +
          '<br> Son nom est :  ' +
          data.name +
          '<br> Elle a laisser le message suivant : ' +
          data.message +
          '</p></body></html>',
        subject: 'Demande de contact de ' + data.name,
      },
    ],
  });
}

module.exports = { sendEmail };