import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { performSearch } from '../redux/Actions/seachbarActions';

const Searchbar = () => {
  const dispatch = useDispatch();
  const { loading, results, error } = useSelector((state) => state.search);

  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    dispatch(performSearch(query));
  };

  return (
    <div className="relative mx-4 ml-12 w-full mt-4">
      {/* Search input field with a search icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1 bottom-2 w-4 h-4 my-auto text-gray-400 left-3 "
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
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="w-full h-11 py-1 pl-10 border outline-none shadow-md"
      />
      {/* Search button with fixed position */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <button onClick={handleSearch} disabled={loading} className="px-4 py-1 bg-cyan-500 text-black rounded">
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {/* Display search results if available */}
      {error && <div>Error: {error.message}</div>}
      {results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
