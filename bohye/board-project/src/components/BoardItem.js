import classes from "./BoardItem.module.css";

function BoardItem({ item }) {
  return (
    <div className={classes.item}>
      <div>{item.id}</div>
      <div>{item.title}</div>
      <div>{item.creator}</div>
    </div>
  );
}

export default BoardItem;
