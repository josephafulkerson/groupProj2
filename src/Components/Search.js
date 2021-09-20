import React from "react";

function Search({ searchTerm, onSearchChange }) {
    return (
      <div className="searchBar">
        <label htmlFor="search"></label>
        <input
          className="searchInput"
          type="text"
          id="search"
          placeholder="Looking for some Lovely Leaves?  Start here ..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default Search;