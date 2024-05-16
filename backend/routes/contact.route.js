const { Router } = require('express');
const router = Router();

const contactController = require('../src/controllers/contact.controller');

router.get('/contact', contactController.getAllByUserId);
router.get('/:id', contactController.getOneById);
router.post('/contact/create', contactController.create);
router.get('/', contactController.getAll);

module.exports = router;