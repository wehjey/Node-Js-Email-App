const nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport({
            host: 'mailtrap.io',
            port: 2525,
            auth: {
                user: '6105**********', //use yours
                pass: '9249**********' //use yours
            }
        });

module.exports = transporter;