import React from "react";
import BoardItem from "./BoardItem";
import classes from "./Board.module.css";

function Board() {
  const items = [
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
  return (
    <div className={classes.main}>
      <header className={classes.cat}>
        <div>Seq</div>
        <div className={classes.title}>Title</div>
        <div>Creator</div>
      </header>
      {items.map((item) => (
        <BoardItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Board;
