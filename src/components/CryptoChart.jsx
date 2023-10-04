import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChartData } from '../redux/Actions/chartActions';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const CryptoChart = () => {
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState('bitcoin');
  const [timeInterval, setTimeInterval] = useState('1d');
  const [chartType, setChartType] = useState('line');
  const timeIntervals = [
    { value: '1d', label: '1D' },
    { value: '7d', label: '1W' },
    { value: '30d', label: '1M' },
    { value: '180d', label: '6M' },
    { value: '365d', label: '1Y' },
  ];
   // Function to fetch data
  useEffect(() => {
    const fetchData = (selectedCurrency, selectedTimeInterval) => {
      dispatch(fetchChartData(selectedCurrency, selectedTimeInterval));
      console.log(selectedCurrency, selectedTimeInterval);
    };
  
    fetchData(currency, timeInterval);
  }, [currency, timeInterval, dispatch]);
  

   // Get data from Redux store
  const chartData = useSelector((state) => state.chartData.chartData);

  // Function to render the selected chart type
  const renderChart = () => {
    if (!Array.isArray(chartData) || chartData.length === 0) {
      return <div>No data available.</div>;
    }

    switch (chartType) {
      case 'line':
        return (
          <LineChart data={chartData} margin={{ left: 8}}>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="price" stroke="rgb(75, 192, 192)" fill="black" activeDot={{ r: 6 }} />
          </LineChart>
        );

      case 'bar':
        return (
          <BarChart data={chartData} margin={{ left:8}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" stroke="rgb(75, 192, 192)" fill="rgb(75, 192, 192)" />
          </BarChart>
        );

      case 'area':
        return (
          <AreaChart data={chartData} margin={{ left: 8}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area dataKey="price" activeDot={{ r: 6 }} fill="rgb(255, 40, 80)" stroke="rgb(75, 192, 192)" />
          </AreaChart>
        );

      default:
        return null;
    }
  };

  
  return (
    <>
      <div className="flex pl-30 bg-white shadow gap-4">
        <div className="w-1/2 pt-4  text-right pb-2">
          {/* Render time interval buttons */}
          {timeIntervals.map((interval) => (
            <button
              key={interval.value}
              onClick={() => setTimeInterval(interval.value)}
              className={` ring-1 px-3 py-1 h-8 mt-2 rounded-md mx-3 mr-2 pb-1.5 ${
                timeInterval === interval.value ? ' ring-black bg-cyan-500 text-black-500 hover:bg-red-400' : 'ring-cyan-500 bg-slate-300 text-red-500 hover:bg-red-400'
              }`}
            >
              {interval.label}
            </button>
          ))}
        </div>
        <div className='flex flex-col md:flex-row  md:gap-3 my-3 gap-4 '>
          {/* Render currency selection dropdown */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className='ring-1 ring-cyan-500 bg-slate-300 rounded focus:outline-none px-2 h-9 mt-2 font-semibold'
          >
            <option value='roasthimjim'>Jim</option>
            <option value='pepe-2-0'>Pepe 2.0</option>
            <option value='gala'>GALA</option>
            <option value='mina-protocol'>Mina Protocol</option>
            <option value='arbitrum'>Arbitrum</option>
            <option value='matic-network'>Polygon</option>
            <option value='bitcoin'>Bitcoin</option>
          </select>

          {/* Render chart type selection dropdown */}
          <select
            className='ring-1 ring-cyan-500 bg-slate-300 rounded focus:outline-none px-2 py-2 h-9 mt-2 font-semibold'
            fdprocessedid='wzsui'
            value={chartType}
            onChange={(e) => setChartType(e.target.value)}
          >
            <option value='line'>Line Chart</option>
            <option value='bar'>Bar Chart</option>
            <option value='area'>Area Chart</option>
          </select>
        </div>
      </div>
      <div style={{ width: '96%', height: 300, paddingTop: 20 }}>
        <ResponsiveContainer>{renderChart()}</ResponsiveContainer>
      </div>
    </>
  );
};

export default CryptoChart;