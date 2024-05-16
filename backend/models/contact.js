const { Schema , model } = require('mongoose');

const contact = new Schema({
    full_name : {type : String , require : true},
    phone : {type : String , require : true},
    email : {typer : String , require : true},
    address : {type : String , require : true}
});

const Contact = model('user' , contact);

module.exports = Contact;
