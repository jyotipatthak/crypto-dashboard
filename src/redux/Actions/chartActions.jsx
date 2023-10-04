// Import Axios to make HTTP requests
import axios from 'axios';

// Define action types as constants
export const SET_TIME_INTERVAL = 'SET_TIME_INTERVAL';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_CHART_TYPE = 'SET_CHART_TYPE';
export const FETCH_CHART_DATA_REQUEST = 'FETCH_CHART_DATA_REQUEST';
export const FETCH_CHART_DATA_SUCCESS = 'FETCH_CHART_DATA_SUCCESS';
export const FETCH_CHART_DATA_FAILURE = 'FETCH_CHART_DATA_FAILURE';

// Action creator: Set the time interval for chart data
export const setTimeInterval = (timeInterval) => ({
  type: SET_TIME_INTERVAL,
  payload: timeInterval,
});

// Action creator: Set the currency for chart data
export const setCurrency = (currency) => ({
  type: SET_CURRENCY,
  payload: currency,
});

// Action creator: Set the chart type
export const setChartType = (chartType) => ({
  type: SET_CHART_TYPE,
  payload: chartType,
});

// Action creator: Request to fetch chart data
export const fetchChartDataRequest = () => ({
  type: FETCH_CHART_DATA_REQUEST,
});

// Action creator: Successfully fetched chart data
export const fetchChartDataSuccess = (chartData) => ({
  type: FETCH_CHART_DATA_SUCCESS,
  payload: chartData,
});

// Action creator: Failed to fetch chart data
export const fetchChartDataFailure = (error) => ({
  type: FETCH_CHART_DATA_FAILURE,
  payload: error,
});

// Thunk action creator: Asynchronous action to fetch chart data based on currency and time interval
export const fetchChartData = (currency, timeInterval) => {
  return (dispatch) => {
    // Dispatch an action to indicate that chart data fetch is in progress
    dispatch(fetchChartDataRequest());

    // Make an API call to fetch chart data based on the selected currency and time interval.
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${currency}/market_chart`, {
        params: {
          vs_currency: 'inr', // Change to the appropriate currency if needed
          days: timeInterval, // Adjust the API parameter according to your time interval selection
        },
      })
      .then((response) => {
        // Extract the relevant chart data from the API response.
        const chartData = response.data.prices.map((entry) => ({
          date: new Date(entry[0]).toLocaleDateString(),
          price: entry[1],
        }));
        
        // Dispatch an action to indicate that chart data fetch was successful
        dispatch(fetchChartDataSuccess(chartData));
      })
      .catch((error) => {
        // Dispatch an action to indicate that chart data fetch failed and provide the error
        dispatch(fetchChartDataFailure(error));
      });
  };
};
