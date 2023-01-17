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
const express = require("express");
const nodemailer = require("nodemailer");

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


app.post('/api/', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Objet créé !'
        });
      });

      
app.post("/contact", async (req, res, next) => {
    const { yourname, youremail, yoursubject, yourmessage } = req.body;
    try {
        await sendMail(yourname, youremail, yoursubject, yourmessage);
          
          res.send("Message Successfully Sent!");
        } catch (error) {
          res.send("Message Could not be Sent");
        }
      });
      
      app.listen(3000, () => console.log("Server is running!"));