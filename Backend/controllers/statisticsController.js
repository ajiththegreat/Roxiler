const Transaction = require('../models/Transaction');

const getStatistics = async (req, res) => {
  const { month } = req.query;
  const monthNumber = new Date(`${month} 1, 2000`).getMonth();

  try {
    const transactions = await Transaction.find({ dateOfSale: { $month: monthNumber + 1 } });
    const totalSaleAmount = transactions.reduce((sum, transaction) => sum + (transaction.isSold ? transaction.price : 0), 0);
    const totalSoldItems = transactions.filter(transaction => transaction.isSold).length;
    const totalNotSoldItems = transactions.length - totalSoldItems;

    res.status(200).json({ totalSaleAmount, totalSoldItems, totalNotSoldItems });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch statistics.' });
  }
};

module.exports = { getStatistics };
