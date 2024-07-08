const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const initRoutes = require('./routes/init');
const transactionRoutes = require('./routes/transactions');
const statisticsRoutes = require('./routes/statistics');
const barChartRoutes = require('./routes/barchart');
const pieChartRoutes = require('./routes/piechart');
const combinedRoutes = require('./routes/combined');

const app = express();

const DB_NAME = "Roxiler";
const URI = "mongodb://127.0.0.1:27017/" + DB_NAME;
mongoose.connect(URI);
mongoose.connection.on("connected", () => {
    console.log(`mongodb [ DB NAME : ${DB_NAME} ] is connected successfully`);
});

app.use(bodyParser.json());

app.use('/api', initRoutes);
app.use('/api', transactionRoutes);
app.use('/api', statisticsRoutes);
app.use('/api', barChartRoutes);
app.use('/api', pieChartRoutes);
app.use('/api', combinedRoutes);

module.exports = app;
