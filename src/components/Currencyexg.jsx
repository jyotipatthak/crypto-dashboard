import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCrypto1, setCrypto2,  setComparisonResult } from '../redux/Actions/exchangeActions';

const CryptoExchange = () => {
  const dispatch = useDispatch();

  // Initialize local state for showExchangeRates
  const [showExchangeRates, setShowExchangeRates] = useState(false);
  const [amountInput, setAmountInput] = useState('1'); // Local state for the amount input

  // Get data from the Redux store
  const crypto1 = useSelector((state) => state.exchange.crypto1);
  const crypto2 = useSelector((state) => state.exchange.crypto2);
  const comparisonResult = useSelector((state) => state.exchange.comparisonResult);
  const exchangeRates = useSelector((state) => state.exchange.exchangeRates);

  // Function to handle amount input change
  const handleAmountChange = (event) => {
    setAmountInput(event.target.value);
  };

  // Function to compare crypto exchange rates
  const handleCompare = () => {
    const rate1Sell = exchangeRates[crypto1]?.sell || 0;
    const rate2Buy = exchangeRates[crypto2]?.buy || 1;

    if (!isNaN(amountInput)) {
      const result1 = (amountInput * rate1Sell) / rate2Buy;

      dispatch(setComparisonResult(result1.toFixed(2)));
    } else {
      dispatch(setComparisonResult('Invalid input'));
    }
  };

  // Function to toggle showing exchange rates
  const handleShowExchangeRates = () => {
    setShowExchangeRates(!showExchangeRates);
  };

  return (
    <div className='container bg-white shadow-md overflow-hidden relative h-full w-full '>
      <div className='font-bold text-cyan-500 p-2 text-left pb-6'>Crypto Exchange</div>

      {/* Select Crypto to Buy */}
      <div className=' relative container'>
      <div htmlFor="crypto1" className='relative left-2 top-6 font-bold text-pink-500'>Buy</div>
      <select
        id="crypto1"
        value={crypto1}
        className='relative top-6 left-5 shadow-md rounded-md border-solid bg-white border-radius h-9 w-36 mr-60'
        onChange={(e) => dispatch(setCrypto1(e.target.value))}
      >
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="pi">Pi</option>
        <option value="tether">Tether</option>
      </select>

      {/* Select Crypto to Sell */}
      <div htmlFor="crypto2" className='relative top-8 font-bold text-cyan-500 left-2'>Sell</div>
      <select
        id="crypto2"
        value={crypto2}
        className='relative top-8 left-5 shadow-md rounded-md border-solid bg-white border-radius h-9 w-36 mr-60'
        onChange={(e) => dispatch(setCrypto2(e.target.value))}
      >
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="pi">Pi</option>
        <option value="tether">Tether</option>
      </select>

      {/* Input for Amount */}
      <label htmlFor="amount"  className='relative left-52 bottom-24 italic hover:not-italic'>Enter value:</label> <br />
      <input
        type="number"
        id="amount"
        placeholder=" amount"
        className='relative bottom-28  left-52 shadow-md rounded-sm border-solid bg-white border-radius p-2 h-8 w-28'
        value={amountInput}
        onChange={handleAmountChange}
      />

      {/* Button to Compare */}
      <button id="compare" className='relative top-6 mt-4 right-10 left-9 shadow-md rounded-md border-solid bg-cyan-500 border-radius h-8 w-28' onClick={handleCompare}>
        Exchange
      </button>

      {/* Display Comparison Result */}
      <div id="comparison-result" className='relative left-52 shadow-md rounded-md border-solid bg-white border-radius bottom-16  h-8 w-28 p-2'>{comparisonResult}</div>

      {/* Show Exchange Rates */}
      {showExchangeRates && (
        <div id="exchange-rates" className="relative left-56 bottom-14 font-bold">
          {Object.entries(exchangeRates).map(([currency, rate]) => (
            <p key={currency}>
              {currency}: {rate.buy} (Buy) - {rate.sell} (Sell)
            </p>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default CryptoExchange;

