const express = require('express');
const { get, delayFunction } = require('../controllers/product');
const router = express.Router();

router.get('/product', delayFunction, get);

module.exports = router;
