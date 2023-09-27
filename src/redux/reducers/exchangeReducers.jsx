// Import action types from exchangeActions.js
import {
    SET_CRYPTO1,
    SET_CRYPTO2,
    SET_AMOUNT,
    SET_COMPARISON_RESULT,
  } from '../Actions/exchangeActions';
  
  // Define the initial state for the exchange feature
  const initialState = {
    exchangeRates: {
      bitcoin: {
        buy: 45000,
        sell: 43000,
      },
      ethereum: {
        buy: 3000,
        sell: 2800,
      },
      tether: {
        buy: 1,
        sell: 1,
      },
      pi: {
        buy: 0.01,
        sell: 0.008,
      },
    },
    crypto1: 'bitcoin',      // Default first cryptocurrency selection
    crypto2: 'tether',       // Default second cryptocurrency selection
    setAamount: '1',             // Default exchange amount
    comparisonResult: '',    // Result of the comparison
  };
  
  // Define the exchangeReducer to manage state related to cryptocurrency exchange
  const exchangeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CRYPTO1:
        // Update the first cryptocurrency selection when SET_CRYPTO1 action is dispatched
        return {
          ...state,
          crypto1: action.payload,
        };
      case SET_CRYPTO2:
        // Update the second cryptocurrency selection when SET_CRYPTO2 action is dispatched
        return {
          ...state,
          crypto2: action.payload,
        };
      case SET_AMOUNT:
        // Update the exchange amount when SET_AMOUNT action is dispatched
        return {
          ...state,
          amount: action.payload,
        };
      case SET_COMPARISON_RESULT:
        // Update the comparison result when SET_COMPARISON_RESULT action is dispatched
        return {
          ...state,
          comparisonResult: action.payload,
        };
      default:
        return state; // If no action matches, return the current state unchanged
    }
  };
  
  export default exchangeReducer; // Export the exchangeReducer for use in the Redux store
  