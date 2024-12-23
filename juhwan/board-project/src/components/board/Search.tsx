import React from "react";

export interface SearchProps {
  filterText: string;
  onFilterTextChange(filterText: string) : void;
}

const Search = ({filterText, onFilterTextChange}: SearchProps) => {

  const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onFilterTextChange(value);
  }

  return (
      <>
        <input value={filterText} onChange={onChange}/>
      </>
  )
}

export default Search;