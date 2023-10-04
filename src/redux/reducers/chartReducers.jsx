// Import action types from chartActions.js
import {
    SET_TIME_INTERVAL,
    SET_CURRENCY,
    SET_CHART_TYPE,
    FETCH_CHART_DATA_REQUEST,
    FETCH_CHART_DATA_SUCCESS,
    FETCH_CHART_DATA_FAILURE,
  } from '../Actions/chartActions';
  
  // Define the initial state for the chart feature
  const initialState = {
    timeInterval: '',        // Default time interval for chart data
    currency: '',     // Default currency for chart data
    chartType: 'line',        // Default chart type
    chartData: [],            // Initial empty array to store chart data
    loading: false,           // Flag to indicate if data is currently being fetched
    error: null,              // Stores any error that occurs during data fetching
  };
  
  // Define the chartReducer to handle actions related to chart data
  const chartReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_TIME_INTERVAL:
        // Update the time interval when SET_TIME_INTERVAL action is dispatched
        return { ...state, timeInterval: action.payload };
  
      case SET_CURRENCY:
        // Update the currency when SET_CURRENCY action is dispatched
        return { ...state, currency: action.payload };
  
      case SET_CHART_TYPE:
        // Update the chart type when SET_CHART_TYPE action is dispatched
        return { ...state, chartType: action.payload };
  
      case FETCH_CHART_DATA_REQUEST:
        // Set loading to true and clear any previous error when fetching data starts
        return { ...state, loading: true, error: null };
  
      case FETCH_CHART_DATA_SUCCESS:
        // Update chartData and set loading to false when data is successfully fetched
        return { ...state, loading: false, chartData: action.payload };
  
      case FETCH_CHART_DATA_FAILURE:
        // Set loading to false and store the error message when data fetching fails
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state; 
    }
  };
  
  export default chartReducer; // Export the chartReducer for use in the Redux store
  