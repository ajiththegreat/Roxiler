const express = require('express');
const router = express.Router();
const { listTransactions } = require('../controllers/transactionsController');

router.get('/transactions', listTransactions);

module.exports = router;
