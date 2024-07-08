const Transaction = require('../models/Transaction');

const getPieChart = async (req, res) => {
  const { month } = req.query;
  const monthNumber = new Date(`${month} 1, 2000`).getMonth();

  try {
    const transactions = await Transaction.find({ dateOfSale: { $month: monthNumber + 1 } });
    const categories = {};

    transactions.forEach(transaction => {
      categories[transaction.category] = (categories[transaction.category] || 0) + 1;
    });

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pie chart data.' });
  }
};

module.exports = { getPieChart };
