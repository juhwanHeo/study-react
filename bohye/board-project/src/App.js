import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";
import Create from "./components/cud/Create";
import And from "./components/priority/And";
import Or from "./components/priority/Or";

const fetchData = async () => {
  try {
    const response = await fetch("http://heojh.iptime.org:8003/board");
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

function App() {
  const [items, setItems] = useState([]);
  const [createMode, setCreateMode] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchData();
      setItems(data);
    };

    getItems();
  }, []);

  const toggleCreateMode = () => {
    setCreateMode(!createMode);
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
    const newFilteredArray = items.filter((item) => item.key !== key);
    setItems(newFilteredArray);
  };

  return (
    <div className="top">
      <div className="board">Board</div>
      <Board items={items} updateItem={updateItem} deleteItem={deleteItem} />
      {createMode ? (
        <Create addItem={addItem} toggleCreateMode={toggleCreateMode} />
      ) : (
        <button className="btn-create" onClick={toggleCreateMode}>
          Create
        </button>
      )}
      <And />
      <Or />
    </div>
  );
}

export default App;
