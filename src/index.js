import React from 'react';  // Import the React library
import ReactDOM from 'react-dom/client';  // Import ReactDOM for rendering
import './index.css';  // Import the CSS file for styling
import App from './App.js';  // Import the main App component
import reportWebVitals from './reportWebVitals.js';  // Import a utility for web vitals reporting
import { Provider } from 'react-redux';  // Import Provider component from Redux for store integration
import store from './redux/Store/store.jsx';  // Import the Redux store

// Create a React root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main application within a React.StrictMode and with Redux store provider
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />  {/* Render the main App component */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();  // Report web vitals for performance monitoring
