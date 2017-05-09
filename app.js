var transporter = require('./config'); //require transformer

var fromEmail = 'test@example.com';
var toEmail = 'test2@example.com';

let mailOptions = {
    from: fromEmail, 
    to: toEmail, 
    subject: 'Example subject', 
    text: 'Hey there', 
    html: 'Hello world'
};  
        
transporter.sendMail(mailOptions, (error, success) => {
    if (error) {
        return console.log(error);
    }
    if(success){
        console.log('Email has been sent');
    }
});        
        



