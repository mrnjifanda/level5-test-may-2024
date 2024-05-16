const { Schema, model, SchemaTypes } = require("mongoose");

const userSchema = {
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  category: { type: String, require: true },
 
};

const User = model("user", userSchema);

module.exports = User;
