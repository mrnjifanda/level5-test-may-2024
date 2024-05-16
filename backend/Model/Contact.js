const { Schema, model } = require('mongoose');

const contactSchema = {
    fullName: { type: String, require: true },
    phone: { type:Number, require: true},
    email: { type: String, require: true },
};

const Contact = model('contact', contactSchema);

module.exports = Contact;