const { Router } = require('express');
const router = Router();
const { index } = require('../controllers/main.controller');
router.get('/', index)
module.exports = router