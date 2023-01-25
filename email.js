const sendEmail = async (req, res) => {
    const { to, subject, htmlContent } = req.body;
    if (!req.user) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    const sendSmtpEmail = new sibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.to = [{email: to}];
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = htmlContent;
  
    try {
      const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
      res.status(200).json({ message: 'Email sent successfully', result });
    } catch (error) {
      res.status(400).json({ message: 'Error sending email', error });
    }
  }
  
  module.exports = { sendEmail };