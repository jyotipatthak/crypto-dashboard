import React, { useState } from "react";
import Searchbar from './searchbar';          // Import Searchbar component
import CryptoChart from './CryptoChart';     // Import CryptoChart component
import CryptoSidebar from './CryptoSidebar'; // Import CryptoSidebar component
import CryptoExchange from './Currencyexg';  // Import CryptoExchange component
import PieChart from "./PieChart";           // Import PieChart component
import CurrencyDropdown from "./currencySelector"; // Import CurrencyDropdown component

function Main() {
  const [selectedCurrency, setSelectedCurrency] = useState("inr"); // State for selected currency

  // Function to handle currency change
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-red-400 via-cyan-500 to-red-400 py-1 text-black text-center font-bold">
        {/* Add your header content here */}
        <h1>CRYPTO DASHBOARD</h1>
      </header>

      {/* Main content */}
      <div className="bg-slate-100 flex flex-col mb-4  md:m-4 h-full rounded md:flex-row overflow-hidden">
        <div className='grid grid-rows md:h-full lg:col-span-3  '>
          <div className="flex flex-row">
            {/* CurrencyDropdown component */}
            <CurrencyDropdown
              selectedCurrency={selectedCurrency}
              handleCurrencyChange={handleCurrencyChange}
            />
            {/* Searchbar component */}
            <Searchbar />
          </div>
          <div className="bg-white shadow-md mt-2 mx-4">
            {/* CryptoChart component */}
            <CryptoChart />
          </div>
          <div className="mx-4 relative shadow-md mb-4 md:flex overflow-hidden">
            <div className="grid sm:grid-cols-2 gap-2 mt-2 w-full">
              {/* PieChart component */}
              <PieChart />
              {/* CryptoExchange component */}
              <CryptoExchange />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md mt-4 mb-4 mx-4 md:ml-0 md:w-1/4">
          {/* CryptoSidebar component */}
          <CryptoSidebar selectedCurrency={selectedCurrency} />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-400 via-cyan-500 to-red-400 py-1 text-black  text-center font-bold ">
        {/* Add your footer content here */}
        <p className="">&copy; 2023 Crypto Dashboard</p>
      </footer>
    </>
  );
}

export default Main;
