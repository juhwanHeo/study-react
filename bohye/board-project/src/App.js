import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";
import Create from "./components/cud/Create";

const fetchData = async () => {
  try {
    const response = await fetch("http://heojh.iptime.org:8003/board");
    const data = await response.json();
    const dataWithIds = data.map((item) => ({
      ...item,
      id: generateId(),
    }));
    return dataWithIds;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchData();
      setItems(data);
    };

    getItems();
  }, []);

  const [createMode, setCreateMode] = useState(false);
  const createAppear = () => {
    setCreateMode(!createMode);
  };

  const addItem = (newItem) => {
    const newItemWithId = {
      ...newItem,
      id: generateId(),
    };
    setItems((prevItems) => [...prevItems, newItemWithId]);
  };

  const updateItem = (id, updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const deleteItem = (id) => {
    const newFilteredArray = items.filter((item) => item.id !== id);
    setItems(newFilteredArray);
  };

  return (
    <div className="top">
      <div className="board">Board</div>
      <Board items={items} updateItem={updateItem} deleteItem={deleteItem} />
      {createMode ? (
        <Create addItem={addItem} />
      ) : (
        <button className="btn-create" onClick={createAppear}>
          Create
        </button>
      )}
    </div>
  );
}

export default App;
