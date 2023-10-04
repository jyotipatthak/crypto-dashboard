import { combineReducers } from 'redux';
import cryptoReducer from './sidebarReducers';
import currencyReducer from './currencyReducers';
import exchangeReducer from './exchangeReducers';
import chartDataReducer from './chartReducers';
import searchbarReducer from './searchbarReducers';


// Combine multiple reducers into a single rootReducer
const rootReducer = combineReducers({
  crypto: cryptoReducer,        // Reducer for cryptocurrency data
  currency: currencyReducer,    // Reducer for selected currency
  exchange: exchangeReducer,    // Reducer for cryptocurrency exchange
  chartData: chartDataReducer,   // Reducer for chart data
   search: searchbarReducer,    // Reducer for search
      // You can add more reducers here if needed
});

export default rootReducer;
