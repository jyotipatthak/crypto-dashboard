// Action Types
// Define action type constants to represent various actions related to cryptocurrency exchange
export const SET_CRYPTO1 = 'SET_CRYPTO1';                 // Action type to set the first cryptocurrency selection
export const SET_CRYPTO2 = 'SET_CRYPTO2';                 // Action type to set the second cryptocurrency selection
export const SET_AMOUNT = 'SET_AMOUNT';                   // Action type to set the exchange amount
export const SET_COMPARISON_RESULT = 'SET_COMPARISON_RESULT'; // Action type to set the comparison result


// Action creator for setting the first cryptocurrency selection
export const setCrypto1 = (crypto1) => ({
  type: SET_CRYPTO1,    
  payload: crypto1,    
});

// Action creator for setting the second cryptocurrency selection
export const setCrypto2 = (crypto2) => ({
  type: SET_CRYPTO2,    
  payload: crypto2,    
});

// Action creator for setting the exchange amount
export const setAmount = (amount) => ({
  type: SET_AMOUNT,     
  payload: amount,     
});

// Action creator for setting the comparison result
export const setComparisonResult = (result) => ({
  type: SET_COMPARISON_RESULT, 
  payload: result,             
});
