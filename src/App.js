import './App.css';  // Import CSS file for styling
import React from 'react';  // Import React library
import Main from './components/Main.jsx';  // Import the Main component
import NavBar from './components/NavBar.jsx';  // Import the NavBar component

// Functional component representing the main application
function App() {
  return (
    <div className="bg-white sm:w-full relative">  {/* Main application container with a white background */}
      <NavBar />  {/* Render the NavBar component */}
      <div>
        <Main />  {/* Render the Main component */}
      </div>
    </div>
  );
}

export default App;  // Export the App component as the default export
