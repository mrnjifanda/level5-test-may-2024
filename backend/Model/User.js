const { Schema, model } = require('mongoose');

const userSchema = {
    firstname: { type: String, require: true, maxLength: 10, minLength: 4 },
    lastname: { type: String, require: true },
    category: { type:Array, require:true },
    contact: { type: Schema.Types.ObjectId, ref: 'contact', require:false }
};

const User = model('user', userSchema);

module.exports = User;