import React, { useState } from "react";
import Button from "../button/Button";
import classes from "./Search.module.css";

const Search = ({
  placeholder,
  label,
  buttonLabel,
  onSearch,
  errorMessage,
}) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      setError(errorMessage);
      return;
    }
    onSearch(query);
  };

  return (
    <form className={classes.searchContainer} onSubmit={handleSubmit}>
      {label && <h2>{label}</h2>}
      <div className={classes.searchInputGroup}>
        <div className={classes.searchInputBox}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={classes.searchInput}
          />
          <Button type="submit" className={classes.searchBtn}>
            {buttonLabel}
          </Button>
        </div>
        {error && <p className={classes.searchErrorMsg}>{error}</p>}
      </div>
    </form>
  );
};

export default Search;
