var express = require('express');
var router = express.Router();
const userController = require('../Controllers/user.controller')

router.post('/create', userController.create);

module.exports = router