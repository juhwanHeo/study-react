import React, { useContext, useState } from "react";
import { BoardActionType, BoardDispatchContext } from "../../context/BoardContext";

const Search = () => {
  const [filterText, setFilterText] = useState<string>("");
  const boardDispatch = useContext(BoardDispatchContext);

  const search = async (title: string = "") => {
    boardDispatch?.({type: BoardActionType.SET_QUERY, query: title})
  }

  const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterText(value);
  }

  const onClick = () => {
    search(filterText);
  }

  return (
      <>
        <input value={filterText} onChange={onChange}/>
        <button onClick={onClick}>Search</button>
      </>
  )
}

export default Search;