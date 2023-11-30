// Creating a dynamic search bar

import React, { useState } from 'react';
import './SearchBar.css'; 

const SearchBar = ({ setCity }) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    setCity(search);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter city name"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

