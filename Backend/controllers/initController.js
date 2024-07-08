const axios = require('axios');
const Transaction = require('../models/Transaction');

const initializeDatabase = async (req, res) => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const transactions = response.data;

    await Transaction.deleteMany(); // Clear existing data
    await Transaction.insertMany(transactions); // Seed new data

    res.status(200).json({ message: 'Database initialized successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to initialize database.' });
  }
};

module.exports = { initializeDatabase };
