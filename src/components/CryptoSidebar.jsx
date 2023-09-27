
// src/components/CryptoSidebar.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoData } from '../redux/Actions/sidebarActions';

const CryptoSidebar = () => {
  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);
  const cryptoData = useSelector((state) => state.crypto.cryptoData);
  const cryptoLoading = useSelector((state) => state.crypto.loading);
  const cryptoError = useSelector((state) => state.crypto.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoData(selectedCurrency));
  }, [selectedCurrency, dispatch]);

  const formatCurrency = (value, currency) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    });
    return formatter.format(value);
  };

  if (cryptoLoading) {
    return <div>Loading...</div>;
  }

  if (cryptoError) {
    return <div>Error: {cryptoError.message}</div>;
  }

  return (
    <div className="mt-4">
      <div className="grid grid-rows mt-4">
        <div className="p-4 font-bold text-xl bg-white rounded-t-md shadow text-center">
          Top Cryptocurrency By Market Cap
        </div>
        <hr />
      </div>

      <div className="crypto-list scroll h-[620px] overflow-y-scroll shadow-lg rounded-lg">
        {cryptoData && cryptoData.length > 0
          ? cryptoData.map((crypto) => (
              <div key={crypto.id} className="crypto-item flex gap-1">
                <div className="crypto-logo w-8 h-8 mt-4 ml-2">
                  <img src={crypto.image} alt={crypto.name} />
                </div>
                <div className="crypto-info mt-2 mb-2 flex ">
                <div className='flex-col'>
                  <p >
                    {crypto.name} ({crypto.symbol})
                  </p>
                  <p  >Mkt Cap: {formatCurrency(crypto.market_cap, selectedCurrency)}</p>
                  </div>
                  <p class='pt-6 ml-2   '>
                    {crypto.priceChangeDirection === 'up' ? (
                      <span>
                        <img className="w-4 h-4" src={require('./images/up.png')} alt="up" />
                      </span>
                    ) : (
                      <span>
                        <img className="h-4 w-4 top-1" src={require('./images/Down.png')} alt="down" />
                      </span>
                    )}{' '}
                    
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default CryptoSidebar;
