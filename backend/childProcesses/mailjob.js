let nodemailer = require('nodemailer');
const {mail_host,mail_port,mail_user,mail_pass} = require('../config/env');
let dep = JSON.parse(process.argv[2]);

let mailOptions = {
    from: mail_user,
    to: dep.email,
    subject: dep.subject,
    text: dep.text
};

let transporter = nodemailer.createTransport({
    host: mail_host,
    port: 465,
    auth: {
        user: mail_user,
        pass: mail_pass
    }
});



process.on('message', (message) => {
    if (message == 'START') {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                process.send({ error: error.message });
            } else {
                process.send(info.response);
            }
            process.exit(1);
        });
    }
});