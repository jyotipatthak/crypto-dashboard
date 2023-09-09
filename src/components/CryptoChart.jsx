import React from "react";
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';

const CryptoChart = () => {
        const [currency, setCurrency] = useState("matic-network");
        const [timeInterval, setTimeInterval] = useState("365d");
        const [priceData, setPriceData] = useState([]);
        const [chartType, setChartType] = useState("line");
        useEffect(() => {
            fetchData(currency, timeInterval);
        }, [currency, timeInterval]);
        const timeIntervals= [
            { value: "1d", label: "1D" },
            { value: "7d", label: "1W" },
            { value: "30d", label: "1M" },
            { value: "180d", label: "6M" },
            { value: "365d", label: "1Y" },
        ];

        const fetchData = (selectedCurrency, selectedTimeInterval) => {
            axios
                .get(
                    `https://api.coingecko.com/api/v3/coins/${selectedCurrency}/market_chart`,
                    {
                        params: {
                            vs_currency: "usd",
                            days: selectedTimeInterval,
                        },
                    }
                )
                .then((response) => {
                    const data = response.data.prices.map((entry) => ({
                        date: new Date(entry[0]).toLocaleDateString(),
                        price: entry[1],
                    }));
                    setPriceData(data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        };
        const renderChart = () => {
             switch (chartType) {
        case "line":
            return(
            
                <LineChart data={priceData} margin={{ left: 25 }}
                >
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend  bordercolor=""/>
                    <Line  dataKey="price"  stroke="rgb(95, 192, 192)" fill="red" 
                    activeDot={{ r: 6}}
                            />
                </LineChart>
            );
            
        case "bar":
           return (
    
               <BarChart data={priceData} margin={{left:25}}
               >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                   <Bar dataKey="price" stroke="rgb(75, 192, 192)" fill="rgb(255, 99, 132)"/>
                </BarChart>
            );
            
        case "area":
            return(
                <AreaChart data={priceData} margin={{ left: 25 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area  dataKey="price"  activeDot={{ r: 6 }} fill="rgb(255, 40, 80)" stroke="rgb(75, 192, 192)" />
                </AreaChart>
            );
            
        default:
            return null;
    }
    
        }
     return (
            <>
                <div className="flex pl-30  gap-4">

                 <div className="w-1/2 pt-4   lg:col-span-3 text-right ">
                            {timeIntervals.map((interval) => (
                                <button
                                    key={interval.value}
                                    onClick={() => setTimeInterval(interval.value)}
                                    className={`bg-slate-200 ring-cyan-500 ring-1 px-3 py-1 h-8 mt-2 rounded-md mx-3 mr-2 pb-1.5 ${timeInterval === interval.value
                                            ? " bg-gray-500 text-red-500"
                                            : "text-gray-700"
                                        }`}
                                >
                                    {interval.label}
                                </button>
                            ))}
                    </div>
                    <div className='flex flex-col md:flex-row  md:gap-3 my-3 gap-4 '>
                        <select value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className='ring-1 ring-cyan-500 bg-gray-100 rounded focus:outline-none px-2 h-9  mt-2 font-semibold'
                             									>
                            <option value='roasthimjim'>Jim</option>
                            <option value='pepe-2-0'>Pepe 2.0</option>
                            <option value='gala'>GALA</option>
                            <option value='mina-protocol'>Mina Protocol</option>
                            <option value='arbitrum'>Arbitrum</option>
                            <option value='matic-network'>Polygon</option>
                            <option value='bitcoin'>Bitcoin</option>
                        </select>

                      

                
                        <select className='ring-1 ring-cyan-500 bg-gray-100 rounded focus:outline-none px-2 py-2 h-9 mt-2 font-semibold'
                            fdprocessedid='wzsui'
                       
                            value={chartType}
                            onChange={(e) => setChartType(e.target.value)}
                    >
                        <option value="line">
                            Line Chart
                        </option>
                        <option value="bar" >
                            Bar Chart
                        </option>
                        <option value="area" >
                            Area Chart
                        </option>
                    </select>

                            
                            
                    </div>
                    </div>
                
                        <div style={{ width: "95%", height: 300, paddingTop: 20, }}>
                            <ResponsiveContainer>{renderChart()}</ResponsiveContainer>
                        </div>
                

        
      </>          

    )

}

export default CryptoChart;

				
		
		