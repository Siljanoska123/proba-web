// odi na 17 min https://www.youtube.com/watch?v=JpcLd5UrDOQ&t=112s
// npm i nodemailer nodemailer-mailgun-transport -S

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'f6a7f8aaf1b868cd2cdedd6e004dcfcf-75cd784d-a98e6c8d',
        domain: 'sandbox1e026773090e410bb25bba35b6c2e980.mailgun.org'
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