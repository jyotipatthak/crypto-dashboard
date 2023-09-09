
import Piegraph from './PieChart';
import  React,{ useState } from 'react';
import { useSelector } from 'react-redux';

const Currencyexg =()=>{
    const exchangeRates = useSelector(state => state.exchangeRates);

  const [crypto1, setCrypto1] = useState('bitcoin');
  const [crypto2, setCrypto2] = useState('bitcoin');
  const [amount, setAmount] = useState('');
  const [comparisonResult, setComparisonResult] = useState('');

  const handleCrypto1Change = event => {
    setCrypto1(event.target.value);
  };

  const handleCrypto2Change = event => {
    setCrypto2(event.target.value);
  };

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const handleCompare = () => {
    
    const rate1Sell = exchangeRates[crypto1].sell;
    const rate2Buy = exchangeRates[crypto2].buy;
   

    if (!isNaN(amount)) {
      const result1 = amount * (rate1Sell / rate2Buy);
      
      setComparisonResult(`
      
      ${result1.toFixed(2)}
      
      
      `);
    } else {
      setComparisonResult('Invalid input');
    }
  };

    return(
        <div className='grid sm:grid-cols-2  mt-2 gap-2 overflow-hidden '>
            <div className=' bg-white shadow-md   '>
                <div className=' flex md:flex-row flex-col sm:text-center '>
                    <div className='font-bold p-2 w-1/2 '>Portfolio</div>
                    <div className=' font-bold p-2 w-1/2'>Total Value:$1000</div>
                </div>
                <div className='h-60 px-20 sm:ml-0'>

                    <Piegraph />

                </div>

            </div>
            <div className='  grid-rows-5 bg-white shadow-lg  overflow-hidden '>
                
               
                    <div className='font-bold p-2 text-left'>Crypto Exchange</div>
                    <div className='h-60 mt-7 ml-6'>  
                <label htmlFor="crypto1" className=' relative font-bold text-pink-500 ml-5 top-3 '>Sell</label>
      <select id="crypto1" value={crypto1} className='relative top-10  shadow-md rounded-md border-solid bg-white border-radius  h-9 w-36' onChange={handleCrypto1Change}>
        {Object.keys(exchangeRates).map(crypto => (
          <option key={crypto} value={crypto}>
            {crypto}
          </option>
        ))}
      </select>
      
<br />
      <label htmlFor="crypto2" className='relative top-10 font-bold text-cyan-500 ml-5'>Buy</label>
      <select id="crypto2" value={crypto2} className='relative top-10 left-11 shadow-sm rounded-md border-solid   mr-72 bg-white border-radius h-9  w-36 ' onChange={handleCrypto2Change}>
        {Object.keys(exchangeRates).map(crypto => (
          <option key={crypto} value={crypto}>
            {crypto}
          </option>
        ))}
      </select>

      <label htmlFor="amount" className='relative bottom-20 bold  left-60 font-bold'>Enter value :</label> <br />
      <input
        type="number"
        id="amount"
        placeholder="Enter amount"
        className='relative bottom-20 left-60 shadow-md rounded-sm border-solid bg-white border-radius p-2 h-8 w-1/3  '
        value={amount}
        onChange={handleAmountChange}
      />

      <button id="compare" className=' relative top-8 right-9 left-3 shadow-md rounded-md border-solid bg-blue-400 border-radius h-9 w-28 ' onClick={handleCompare}>
       Exchange 
      </button>

        
        
      <div id="comparison-result"  className='relative left-60 shadow-md rounded-md border-solid bg-white border-radius bottom-14  h-9 w-1/3 p-2 pb-2 ' >{comparisonResult}</div>
    </div>
                    
                
        </div>
        
	</div>				
				

            )
            }
export default Currencyexg;