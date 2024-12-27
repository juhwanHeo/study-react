import BoardItem from "./BoardItem";
import classes from "./BoardTable.module.css";

function BoardTable({ items, updateItem, deleteItem }) {
  return (
    <div className={classes.boardTable}>
      <header className={classes.cat}>
        <div>Seq</div>
        <div className={classes.title}>Title</div>
        <div>Creator</div>
      </header>
      {items.length > 0 ? (
        items.map((item, index) => (
          <BoardItem
            key={item.id}
            item={item}
            index={index + 1}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        ))
      ) : (
        <div className={classes.noPosts}>No contents..</div>
      )}
    </div>
  );
}

export default BoardTable;
