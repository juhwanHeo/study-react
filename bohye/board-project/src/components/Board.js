import React from "react";
import BoardItem from "./BoardItem";
import classes from "./Board.module.css";

function Board({ items, updateItem }) {
  return (
    <div className={classes.main}>
      <header className={classes.cat}>
        <div>Seq</div>
        <div className={classes.title}>Title</div>
        <div>Creator</div>
      </header>
      {items.length > 0 ? (
        items.map((item, index) => (
          <BoardItem
            key={index + 1}
            item={item}
            index={index + 1}
            updateItem={updateItem}
          />
        ))
      ) : (
        <div className={classes.noPosts}>No contents..</div>
      )}
    </div>
  );
}

export default Board;
