import React, { useState } from "react";
import Searchbar from './searchbar';
import CryptoChart from './CryptoChart';
import CryptoSidebar from './CryptoSidebar';
import CryptoExchange from './Currencyexg';
import PieChart from "./PieChart";
import CurrencyDropdown from "./currencySelector";

function Main() {
  const [selectedCurrency, setSelectedCurrency] = useState("inr");

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-red-500 text-black text-center font-bold">
        {/* Add your header content here */}
        <h1>CRYPTO DASHBOARD</h1>
      </header>

      {/* Main content */}
      <div className="bg-slate-100 flex flex-col mb-4 m-4 md:m-6 h-full rounded md:flex-row overflow-hidden">
        <div className='grid grid-rows md:h-full lg:col-span-3 md:gap-2 container mx-auto '>
          <div className="flex flex-row">
            <CurrencyDropdown
              selectedCurrency={selectedCurrency}
              handleCurrencyChange={handleCurrencyChange}
            />
            <Searchbar />
          </div>
          <div className="bg-white shadow-md mt-2 mx-4">
            <CryptoChart />
          </div>
          <div className="mx-4 relative shadow-md mb-4 md:flex overflow-hidden">
            <div className="grid sm:grid-cols-2 gap-2 mt-2 w-full">
              <PieChart />
              <CryptoExchange />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md mt-4 mb-4 mx-4 md:ml-0">
          <CryptoSidebar selectedCurrency={selectedCurrency} />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-500 text-black  text-center font-bold">
        {/* Add your footer content here */}
        <p>&copy; 2023 Crypto Dashboard</p>
      </footer>
    </>
  );
}

export default Main;
