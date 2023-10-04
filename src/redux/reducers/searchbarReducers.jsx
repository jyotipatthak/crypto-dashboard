// In a file named searchReducer.js

// Import action types from searchbarActions.js
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "../Actions/seachbarActions";

// Initial state for the search bar
const initialState = {
  query: '',
  results: [],
  loading: false,
  error: null,
};

// Search bar reducer function
const searchbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      // Handle search request action by setting loading to true and clearing any previous error
      return { ...state, loading: true, error: null };
    case SEARCH_SUCCESS:
      // Handle search success action by updating results, setting loading to false, and clearing any previous error
      return { ...state, loading: false, results: action.payload, error: null };
    case SEARCH_FAILURE:
      // Handle search failure action by setting loading to false and updating the error message
      return { ...state, loading: false, error: action.payload };
    default:
      // Default case: return the current state
      return state;
  }
};

export default searchbarReducer;
