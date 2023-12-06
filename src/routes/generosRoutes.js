const express = require('express');
const router = express.Router();
const generosController = require('../controllers/generosController');

router.get('/', generosController.list);
//router.get('/detail/:id', generosController.detail);


module.exports = router;