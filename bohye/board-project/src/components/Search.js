import React, { useState } from "react";
import Button from "./common/Button";
import classes from "./Search.module.css";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery === "") {
      setError("Please check your search term and try again.");
      return;
    }
    onSearch(trimmedQuery);
  };

  return (
    <form className={classes.searchContainer} onSubmit={handleSubmit}>
      <h2>Title Search</h2>
      <div className={classes.searchInputGroup}>
        <div className={classes.searchInputBox}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Enter title..."
            className={classes.searchInput}
          />
          <Button type="submit" className={classes.searchBtn}>
            Search
          </Button>
        </div>
        {error && <p className={classes.searchErrorMsg}>{error}</p>}
      </div>
    </form>
  );
};

export default Search;
