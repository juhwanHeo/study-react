import React, { useState } from "react";
import Button from "./common/Button";
import classes from "./Search.module.css";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className={classes.searchContainer} onSubmit={handleSubmit}>
      <h2>Title Search</h2>
      <div className={classes.searchInputGroup}>
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
    </form>
  );
};

export default Search;
