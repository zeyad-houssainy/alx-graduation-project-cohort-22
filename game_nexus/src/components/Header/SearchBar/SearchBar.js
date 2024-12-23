// src/components/Header/Navbar/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    // You'll add search logic here later
  };

  const handleSearchSubmit = (event) => {
      event.preventDefault()
    // Perform search action
    console.log("Searching for:", searchTerm);
  };

  return (
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
  );
};

export default SearchBar;