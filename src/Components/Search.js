import React from "react";

function Search({ searchTerm, onSearchChange }) {
    return (
      <div>
        <label htmlFor="search">Looking for some lovely leaves?  </label>
        <input
          type="text"
          id="search"
          placeholder="search here ..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default Search;