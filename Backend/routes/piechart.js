const express = require('express');
const router = express.Router();
const { getPieChart } = require('../controllers/piechartController');

router.get('/piechart', getPieChart);

module.exports = router;
