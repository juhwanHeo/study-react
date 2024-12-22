import React, { useState, useEffect } from "react";
import BoardTable from "./BoardTable";
import CreateUpdate from "./cud/CreateUpdate";
import Search from "./Search";
import Button from "./common/Button";
import classes from "./Board.module.css";

function Board() {
  const [items, setItems] = useState([]);
  const [isCreating, setIsCreating] = useState(false);

  const fetchItems = async (query = "") => {
    try {
      const url = query
        ? `http://heojh.iptime.org:8003/board?title=${query}`
        : "http://heojh.iptime.org:8003/board";
      const response = await fetch(url);
      const data = await response.json();
      const dataWithKeys = data.map((item) => ({
        ...item,
        key: crypto.randomUUID(),
      }));
      setItems(dataWithKeys);
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

  const updateItem = (key, updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.key === key ? updatedItem : item))
    );
  };

  const deleteItem = (key) => {
    setItems((prevItems) => prevItems.filter((item) => item.key !== key));
  };

  const toggleCreateMode = () => {
    setIsCreating((prevState) => !prevState);
  };

  return (
    <div className={classes.boardContainer}>
      <Search onSearch={handleSearch} />
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
