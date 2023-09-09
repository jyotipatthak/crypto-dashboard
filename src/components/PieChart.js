 import React from 'react';
 import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
  import {Pie} from 'react-chartjs-2';

            ChartJS.register(ArcElement, Tooltip, Legend);


            export const data = {
                labels: ['Eth', 'Btc', 'Pi'],
            datasets: [
            {

                data: [200,  200,200],
            backgroundColor: [
              "rgb(75, 192, 192)",
              
              'rgb(54, 162, 235)',
              'rgb(255, 99, 132)',
              
              ],
            borderColor: [
              "rgb(75, 192, 192)",
              
              'rgb(54, 162, 235)',
              'rgb(255, 99, 132)',
            ],
            borderWidth: 0,
    },
            ],
};
            const option =
            {
                plugins:
            {
                legend:
            {
                position:'right',
            fullSize:true,
            
            labels:
            {
              padding:15,  
            usePointStyle:true,
            pointStyle:'circle',
            
      }
    }
  }
}

             function Piegraph() {
  return <Pie className='graph' data={data} options={option} />;
}
		


           

export default Piegraph;
