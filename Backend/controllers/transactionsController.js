const Transaction = require('../models/Transaction');

const listTransactions = async (req, res) => {
  const { page = 1, perPage = 10, search = '', month } = req.query;
  const monthNumber = new Date(`${month} 1, 2000`).getMonth();

  const query = {
    dateOfSale: { $month: monthNumber + 1 }
  };

  if (search) {
    query.$or = [
      { title: new RegExp(search, 'i') },
      { description: new RegExp(search, 'i') },
      { price: Number(search) }
    ];
  }

  try {
    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(Number(perPage));

    const total = await Transaction.countDocuments(query);

    res.status(200).json({ transactions, total });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions.' });
  }
};

module.exports = { listTransactions };
