// Import Axios to make HTTP requests
import axios from 'axios';

// Define action types as constants
export const FETCH_CRYPTO_REQUEST = 'FETCH_CRYPTO_REQUEST';
export const FETCH_CRYPTO_SUCCESS = 'FETCH_CRYPTO_SUCCESS';
export const FETCH_CRYPTO_FAILURE = 'FETCH_CRYPTO_FAILURE';

// Action creator: Request to fetch cryptocurrency data
export const fetchCryptoRequest = () => ({
  type: FETCH_CRYPTO_REQUEST,
});

// Action creator: Successfully fetched cryptocurrency data
export const fetchCryptoSuccess = (cryptoData) => ({
  type: FETCH_CRYPTO_SUCCESS,
  payload: cryptoData,
});

// Action creator: Failed to fetch cryptocurrency data
export const fetchCryptoFailure = (error) => ({
  type: FETCH_CRYPTO_FAILURE,
  payload: error,
});

// Thunk action creator: Asynchronous action to fetch cryptocurrency data based on currency
export const fetchCryptoData = (currency) => {
  return (dispatch) => {
    // Dispatch an action to indicate that cryptocurrency data fetch is in progress
    dispatch(fetchCryptoRequest());

    // Make an API call to fetch cryptocurrency data based on the selected currency
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: currency,   // Specify the currency to use in the API call
          order: 'market_cap_desc', // Order the results by market capitalization in descending order
          per_page: 20,            // Limit the number of results per page to 10
          page: 1,                 // Fetch the first page of results
        },
      })
      .then((response) => {
        // Dispatch an action to indicate that cryptocurrency data fetch was successful
        dispatch(fetchCryptoSuccess(response.data));
      })
      .catch((error) => {
        // Dispatch an action to indicate that cryptocurrency data fetch failed and provide the error
        dispatch(fetchCryptoFailure(error));
      });
  };
};
