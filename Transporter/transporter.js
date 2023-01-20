//Nodemailer transporter using await ?  We choose an External transport 
const transporter = nodemailer.createTransport({
    service: 'SendinBlue', // no need to set host or port etc.
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
}); 


transporter.sendMail({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Message',
        text: 'I hope this message gets delivered!'
    }, (err, info) => {
        console.log(info.envelope);
        console.log(info.messageId);
    });
