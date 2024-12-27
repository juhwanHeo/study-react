import React, { useState, useEffect } from "react";
import axios from "axios";
import BoardTable from "./BoardTable";
import CreateUpdate from "./cud/CreateUpdate";
import Search from "../common/search/Search";
import Button from "../common/button/Button";
import classes from "./Board.module.css";

function Board() {
  const [items, setItems] = useState([]);
  const [isCreating, setIsCreating] = useState(false);

  const fetchItems = async (query = "") => {
    try {
      const response = await axios.get("http://heojh.iptime.org:8003/board", {
        params: { title: query },
      });
      const data = response.data;
      setItems(data);
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

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const updateItem = (id, updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleCreateMode = () => {
    setIsCreating((prevState) => !prevState);
  };

  return (
    <div className={classes.boardContainer}>
      <Search
        placeholder="Enter title..."
        label="Search Board"
        buttonLabel="Find"
        onSearch={handleSearch}
        errorMessage="Please check your search term and try again."
      />
      <h2 className={classes.boardHeader}>Board</h2>
      <BoardTable
        items={items}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
      <Button className={classes.createBtn} onClick={toggleCreateMode}>
        Create
      </Button>
      {isCreating && (
        <CreateUpdate
          mode="create"
          onSubmit={addItem}
          onClose={toggleCreateMode}
        />
      )}
    </div>
  );
}

export default Board;
