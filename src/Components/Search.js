import React from "react";

function Search({ searchTerm, onSearchChange }) {
    return (
      <div>
        <label htmlFor="search">Search Teas:  </label>
        <input
          type="text"
          id="search"
          placeholder="search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default Search;