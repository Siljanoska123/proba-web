const Form = require('../models/form');
const sendMail = require ('../mail')

module.exports = {

    sentEmail: async (req, res) => {
        // send email
        const { name, companyName, phoneNumber, email, text } = Form.create(req.body);
        console.log('Data:', req.body)
        sendMail(name, companyName, phoneNumber, email, text, function (err, data) {
            if (err) {
                res.status(500).json({ message: 'greska' });
            } else {
                res.json({ message: 'praten mailot' })
            }

        })
    },



}