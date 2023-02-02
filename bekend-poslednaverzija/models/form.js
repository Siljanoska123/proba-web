const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    companyName: {
        type: String,
        required: true,
        minLength: 3
    },
    phoneNumber: {
        type: Number,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    text: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('form', formSchema
)