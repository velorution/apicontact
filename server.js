const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  try {
    const { to, subject, text } = req.body;
    const response = await axios.post('https://api.sendinblue.com/v3/smtp/email', {
      to: [{ email: to }],
      subject,
      text,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': 'YOUR_API_KEY',
      },
    });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
