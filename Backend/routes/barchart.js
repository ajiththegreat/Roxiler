const express = require('express');
const router = express.Router();
const { getBarChart } = require('../controllers/barchartController');

router.get('/barchart', getBarChart);

module.exports = router;
