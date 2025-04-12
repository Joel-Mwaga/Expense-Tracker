import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => (
  <div>
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  </div>
);

export default SearchBar;