import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register Chart.js elements and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Piegraph = () => {
  return (
    // Container for the pie chart with styles
    <div className='container shadow-md border w-full  bg-white   relative'> 
      {/* Title */}
      <div className='flex md:flex-row flex-col'>
        <h1 className='font-bold text-cyan-500 p-2 w-1/2 relative'>Portfolio</h1>
      </div>
        
      {/* Pie Chart */}
      <div className="h-48"> 
        <Pie 
          data={{
            labels: ['Tether', 'Luna', 'Ethereum'],
            datasets: [
              {
                label: 'Portfolio',
                data: [400, 250, 350],
                backgroundColor: [
                  "#00A3B0",
                  'rgb(54, 162, 235)',
                  'rgb(255, 99, 132)',      
                ],
                borderColor: [
                  "rgb(95, 192, 192)",
                  'rgb(54, 162, 235)',
                  'rgb(255, 99, 132)',
                ],
                borderWidth: 1,
              },
            ],
          }} 
          plugins={[ChartDataLabels]}  
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position:"bottom",
                labels: {
                  usePointStyle: true,
                  pointStyle: "circle"
                }
              },
              datalabels: {
                display: true,
                color: "white",
                align: "center",
                padding: {
                  right: 2
                },
                labels: {
                  title: {
                    font: {
                      weight: "bold",
                      size: 18
                    }
                  },
                },
              },
            }
          }}
        />
      </div>
    </div>
  )
}

export default Piegraph;
