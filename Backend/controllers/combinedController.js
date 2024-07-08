const axios = require('axios');

const getCombinedData = async (req, res) => {
  const { month } = req.query;

  try {
    const [transactions, statistics, barChart, pieChart] = await Promise.all([
      axios.get(`http://localhost:3000/transactions?month=${month}`),
      axios.get(`http://localhost:3000/statistics?month=${month}`),
      axios.get(`http://localhost:3000/barchart?month=${month}`),
      axios.get(`http://localhost:3000/piechart?month=${month}`)
    ]);

    res.status(200).json({
      transactions: transactions.data,
      statistics: statistics.data,
      barChart: barChart.data,
      pieChart: pieChart.data
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch combined data.' });
  }
};

module.exports = { getCombinedData };
