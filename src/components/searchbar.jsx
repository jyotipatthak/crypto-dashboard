import React, { useState } from "react";
import axios from "axios";

const Searchbar = () => {
  // Define state variables for query input and search results
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Event handler for input change
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Event handler for search button click
  const handleChange = async () => {
    try {
      // Make an API request to CoinGecko to fetch coin data based on the query
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
        params: {
          vs_currency: "usd",
          ids: query
        }
      });
      
      // Update the results state with the response data
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative mx-4 ml-12 w-full mt-4">
      {/* Search input field with a search icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1 bottom-2 w-4 h-4 my-auto text-gray-400 left-3"
        width="18" height="12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search....."
        value={query}
        onChange={handleInputChange}
        className="w-full h-11 py-1 pl-10 border outline-none shadow-md"
      />
      {/* Search button */}
      <button onClick={handleChange} className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1  bg-cyan-500 text-black rounded overflow-hidden">
        Search
      </button>

      {/* Display search results if available */}
      {results.length > 0 && (
        <div className="mt-4">
          <div key={results[0].id} className="flex items-center">
            <img src={results[0].image} alt={results[0].name} className="w-8 h-8 mr-2" />
            <div>{results[0].name}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
