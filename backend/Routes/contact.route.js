var express = require('express');
var router = express.Router();
const contactController = require('../Controllers/contact.controller')

router.post('/', contactController.add)
router.get('/', contactController.read)
router.put('/', contactController.update)
router.delete('/delete/id', contactController.deletes)

module.exports = router