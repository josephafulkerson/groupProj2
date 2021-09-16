import React from "react";

function Search({ searchTerm, onSearchChange }) {
    return (
      <div className="searchBar">
        <label htmlFor="search"><strong>Looking for some lovely leaves?</strong></label><br/><br/>
        <input
          className="searchInput"
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