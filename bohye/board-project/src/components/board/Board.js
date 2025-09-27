import React, { useEffect } from "react";
import axios from "axios";
import { useBoardState, useBoardDispatch } from "../../contexts/BoardContext";
import CreateUpdate from "./cud/CreateUpdate";
import Search from "../common/search/Search";
import Button from "../common/button/Button";
import classes from "./Board.module.css";
import BoardHeader from "./BoardHeader";
import BoardItem from "./BoardItem";

function Board() {
  const state = useBoardState();
  const dispatch = useBoardDispatch();

  const fetchItems = async (query = "") => {
    try {
      const response = await axios.get("http://heojh.iptime.org:8003/board", {
        params: { title: query },
      });
      const data = response.data;
      dispatch({ type: "SET_ITEMS", payload: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSearch = (query) => {
    fetchItems(query);
  };

  const toggleCreateMode = () => {
    dispatch({ type: "TOGGLE_CREATE_MODE" });
  };

  return (
    <div className={classes.Board}>
      <Search
        placeholder="Enter title..."
        label="Search Board"
        buttonLabel="Find"
        onSearch={handleSearch}
        errorMessage="Please check your search term and try again."
      />
      <h2 className={classes.boardHeader}>Board</h2>
      <div className={classes.boardTable}>
        <BoardHeader />
        {state.items.length > 0 ? (
          state.items.map((item, index) => (
            <BoardItem key={item.id} item={item} index={index + 1} />
          ))
        ) : (
          <div className={classes.noPosts}>No contents..</div>
        )}
      </div>
      <Button className={classes.createBtn} onClick={toggleCreateMode}>
        Create
      </Button>
      {state.isCreating && (
        <CreateUpdate mode="create" onClose={toggleCreateMode} />
      )}
    </div>
  );
}

export default Board;
