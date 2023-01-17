/*
|--------------------------------------------------------------------------
| Server.js 
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

const express = require("express");
const nodemailer = require("nodemailer");


//Nodemailer transporter
// We choose an External transport 
// using await ?  
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

app.get("/", (req, res) => {
    res.render(index.html);
    });
      
app.get("/contact", (req, res) => {
    res.render(contact.html);
    });
      
app.post("/contact", async (req, res, next) => {
    const { yourname, youremail, yoursubject, yourmessage } = req.body;
    try {
        await mainMail(yourname, youremail, yoursubject, yourmessage);
          
          res.send("Message Successfully Sent!");
        } catch (error) {
          res.send("Message Could not be Sent");
        }
      });
      
      app.listen(3000, () => console.log("Server is running!"));