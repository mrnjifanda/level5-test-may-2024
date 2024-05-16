const { Schema , model } = require('mongoose');

const users = new Schema({
    first_name : {type : String , require : true},
    last_name : {type : String , require : true},
    categorie : {typer : String , require : true}
});

const Users = model('user' , users);

module.exports = Users;
