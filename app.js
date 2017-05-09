var transporter = require('./config'); //require transformer

var fromEmail = 'test@example.com';

let mailOptions = {
    from: fromEmail, 
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
        



