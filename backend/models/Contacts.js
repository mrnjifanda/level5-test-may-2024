const { Schema, model, SchemaTypes } = require("mongoose");
const user = require('./User')
const contactSchema = {
  fullname: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: Number, require: true },
  added_by: { type: Schema.Types.ObjectId, ref:'user', require: true }
};

const Contacts = model("contact", contactSchema);

module.exports = Contacts;
