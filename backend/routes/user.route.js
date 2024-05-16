const { Router } = require('express');
const router = Router();

const userController = require('../src/controllers/user.controller');


router.post('/', userController.getAll);

module.exports = router;