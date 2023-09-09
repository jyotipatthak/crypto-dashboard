import React, { useState } from "react";

import Searchbar from './searchbar';
import CryptoChart from './CryptoChart';
import Rightsidebar from './rightsidebar';
import Currencyexg from './Currencyexg';
function Main() {
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  
  return (
    <>
        <div class="bg-slate-100  flex  flex-col  mb-4 m-4  md:m-6  h-full  rounded md:flex-row  overflow-hidden"  >
			    <div class=' grid grid-rows rounded-lg md:h-full  justify-center  lg:col-span-3  md:gap-2'>
                    
					<div class="flex flex-row">
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="h-10 w-20 relative left-4 top-4 rounded outline-none border focus:border-cyan-500 shadow-sm bg-white"
                >
                  <option value="usd">USD</option>
                  <option value="inr">INR</option>
                  <option value="eur">EUR</option>
                  <option value="usd">YEN</option>
                  <option value="GBP">GBP</option>
                </select>

                <Searchbar />
            </div> 
              <div class=" bg-white shadow-md  mt-2 mx-4  ">
              <CryptoChart />
            
					</div>
					<div class="mx-4 mb-4 overflow-hidden shadow-md">
					  <Currencyexg />
					</div>
				</div>
        <div class=" bg-white shadow-md  mt-4 mb-4 mx-4 md:ml-0" >
                  <Rightsidebar selectedCurrency={selectedCurrency} /> 
				</div>
            
    </div>
        
      
    </>
  );
}

export default Main;
