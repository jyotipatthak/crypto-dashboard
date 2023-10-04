// searchbarActions.js
import axios from 'axios';

// Action types
export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

// Action creator for search request
export const searchRequest = () => ({
  type: SEARCH_REQUEST,
});

// Action creator for search success with results payload
export const searchSuccess = (results) => ({
  type: SEARCH_SUCCESS,
  payload: results,
});

// Action creator for search failure with error payload
export const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  payload: error,
});

// Async action creator for performing a search
export const performSearch = (query) => {
  return async (dispatch) => {
    dispatch(searchRequest()); // Dispatch search request action

    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
        params: {
          vs_currency: 'usd',
          ids: query,
          per_page: 4,
        },
      });

      dispatch(searchSuccess(response.data)); // Dispatch search success action with data
    } catch (error) {
      dispatch(searchFailure(error)); // Dispatch search failure action with error
    }
  };
};
