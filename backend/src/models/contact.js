const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    fullname: { type: String, required: true },
    phone: { type: Number, require: true },
    email: { type: String, required: true },
    added_by: { type: String, require: true },
    created_at: { type: Date, default: Date.now }
});

const User = model('user', userSchema);

module.exports = User;