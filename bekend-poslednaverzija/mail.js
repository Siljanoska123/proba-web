// odi na 17 min https://www.youtube.com/watch?v=JpcLd5UrDOQ&t=112s
// npm i nodemailer nodemailer-mailgun-transport -S

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '',
        domain: ''
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


// chunk 4
const sendMail = (name, companyName, phoneNumber, email, text, cb) => {
    const mailOptions = {
        from: email, // TODO replace this with your own email
        to: 'jancevska.ivana@gmail.com', // (avtoriziraniot mail) TODO: the receiver email has to be authorized for the free tier
        name: name,
        text: text,
        companyName: companyName,
        phoneNumber: phoneNumber

    };



    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null)
        } else {
            cb(null, data)
        }
    })
}

module.exports = sendMail;