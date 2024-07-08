import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const BarChartComponent = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBarChartData();
  }, [month]);

  const fetchBarChartData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/barchart`, {
        params: { month }
      });
      const chartData = Object.keys(response.data).map(range => ({
        name: range,
        items: response.data[range]
      }));
      setData(chartData);
    } catch (error) {
      console.error('Failed to fetch bar chart data:', error);
    }
  };

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="items" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
