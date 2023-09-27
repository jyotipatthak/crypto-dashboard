// Import action types from cryptoActions.js
import {
    FETCH_CRYPTO_REQUEST,
    FETCH_CRYPTO_SUCCESS,
    FETCH_CRYPTO_FAILURE,
  } from '../Actions/sidebarActions';
  
  // Define the initial state for the crypto feature
  const initialState = {
    loading: false,     // Flag to indicate if data is currently being fetched
    cryptoData: [],     // Holds cryptocurrency data (initially empty array)
    error: null,        // Stores any error that occurs during data fetching (initially null)
  };
  
  // Define the cryptoReducer to handle actions related to cryptocurrency data fetching
  const cryptoReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CRYPTO_REQUEST:
        // Set loading to true when FETCH_CRYPTO_REQUEST action is dispatched
        return {
          ...state,
          loading: true,
        };
      case FETCH_CRYPTO_SUCCESS:
        
        
        return {
          ...state,
          loading: false,
          cryptoData: action.payload,
          error: null,
        };
      case FETCH_CRYPTO_FAILURE:
        
        
        return {
          ...state,
          loading: false,
          cryptoData: [],
          error: action.payload,
        };
      default:
        return state; 
    }
  };
  
  export default cryptoReducer; // Export the cryptoReducer for use in the Redux store
  