// Define the initial state for the currency feature
const initialState = {
    selectedCurrency: 'usd', // Default selected currency
    cryptoData: null,       // Holds cryptocurrency data (initially null)
};

// Define the currencyReducer to handle actions related to currency and cryptocurrency data
const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENCY':
            // Update the selected currency when SET_CURRENCY action is dispatched
            return {
                ...state,
                selectedCurrency: action.payload,
            };
        case 'FETCH_CRYPTO_DATA':
            // Update cryptoData when FETCH_CRYPTO_DATA action is dispatched
            return {
                ...state,
                cryptoData: action.payload,
            };
        default:
            return state; // If no action matches, return the current state unchanged
    }
};

export default currencyReducer; // Export the currencyReducer for use in the Redux store
