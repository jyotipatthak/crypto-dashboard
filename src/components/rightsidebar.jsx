 import React from 'react';
 import  { useState, useEffect } from 'react';
import axios from 'axios';

const Rightsidebar =({ selectedCurrency}) =>{

 const [cryptoList, setCryptoList] = useState([]);
  

  useEffect(() => {
    const fetchCryptoData = (currency) => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: currency,
          order: 'market_cap_desc',
          per_page: 100,
          
        },
      })
      .then((response) => {
        setCryptoList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };


    fetchCryptoData(selectedCurrency);
  }, [selectedCurrency]);

  const formatCurrency = (value, currency) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    });
    return formatter.format(value);
  };

  return (
  
  <div class="mt-4">
			<div class='  grid grid-rows mt-4  '  >
				<div class='p-4  font-bold text-xl bg-white rounded-t-md shadow text-center'>Top Cryptocurrency By
					Market Cap</div>
				<hr></hr>
			
		</div>	
      
      <div className="crypto-list scroll h-[645px]  overflow-y-scroll  shadow-lg rounded-lg ">
        {cryptoList.map((crypto) => (
          <div key={crypto.id} className="crypto-item flex gap-1 ">
            <div className="crypto-logo w-8 h-8  mt-4 ml-2">
              <img src={crypto.image} alt={crypto.name} />
            </div>
            <div className="crypto-info mt-2 ">
              <p>{crypto.name} ({crypto.symbol})</p>
              <p>Mkt Cap: {formatCurrency(crypto.market_cap, selectedCurrency)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    
 


	
	);
}

export default Rightsidebar;