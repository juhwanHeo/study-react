import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";

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
  const dummyItems = [
    {
      id: 1,
      title: "title 1",
      content: "content 1",
      creator: "creator 1",
    },
    {
      id: 2,
      title: "title 2",
      content: "content 2",
      creator: "creator 2",
    },
    {
      id: 3,
      title: "title 3",
      content: "content 3",
      creator: "creator 3",
    },
  ];

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchData();
      setItems(data);
    };

    getItems();
  }, []);

  return (
    <div className="top">
      <div>
        <div className="board">과제1, 2</div>
        <Board items={dummyItems} />
      </div>
      <div>
        <div className="board">과제3</div>
        <Board items={items} />
      </div>
    </div>
  );
}

export default App;
