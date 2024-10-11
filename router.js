const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/supplements', controller.getAll);
router.get('/supplements/:id', controller.getById);
router.post('/supplements', controller.create);
router.delete('/supplements', controller.deleteAll);
router.delete('/supplements/:id', controller.deleteById);

module.exports = router;
