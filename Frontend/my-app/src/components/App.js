import React, { useState } from 'react';
import '../App.css';
import TransactionsTable from './TransactionsTable';
import StatisticsBox from './StatisticsBox';
import BarChartComponent from './BarChartComponent';
import PieChartComponent from './PieChartComponent';

const App = () => {
  const [month, setMonth] = useState('March');

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  return (
    <div className="container">
      <h1>Transactions Dashboard</h1>
      <select value={month} onChange={handleMonthChange}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      <TransactionsTable month={month} />
      <div className="statistics">
        <StatisticsBox month={month} />
      </div>
      <div className="charts">
        <BarChartComponent month={month} />
        <PieChartComponent month={month} />
      </div>
    </div>
  );
};

export default App;
