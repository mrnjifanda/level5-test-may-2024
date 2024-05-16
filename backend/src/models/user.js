const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    category: { type: string, require: true },
    created_at: { type: Date, default: Date.now }
});

const User = model('user', userSchema);

module.exports = User;