import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => (
  <div>
    <label>Search:</label>
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  </div>
);

export default SearchBar;