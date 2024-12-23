import React, { useContext, useEffect, useState } from "react";
import { BoardActionType, BoardDispatchContext } from "../../context/BoardContext";

const Search = () => {
  const [filterText, setFilterText] = useState<string>("");
  const boardDispatch = useContext(BoardDispatchContext);

  useEffect(() => {
    search();
  }, []);

  const search = async (title: string = "") => {
    apiBoardItems(title).then(res => {
      boardDispatch?.({type: BoardActionType.SEARCH_BOARD_ITEM, boardItems: res || [] })
    });
  }

  const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterText(value);
  }

  const onClick = () => {
    search(filterText);
  }

  const apiBoardItems = async (title: string) => {
    const res = await fetch(`http://heojh.iptime.org:8003/board?title=${title}`);
    return await res.json();
  }

  return (
      <>
        <input value={filterText} onChange={onChange}/>
        <button onClick={onClick}>Search</button>
      </>
  )
}

export default Search;