const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const apiInstance = require('./email-api');

const app = express();

app.use(bodyParser.json());

app.post('/send-email', jsonParser, async (req, res) => {
  try {
    await apiInstance.sendEmail(req.body);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email' });
  }
});

module.exports = app;
