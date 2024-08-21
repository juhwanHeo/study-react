import classes from "./BoardItem.module.css";

function BoardItem({ item, index }) {
  return (
    <div className={classes.item}>
      <div>{index}</div>
      <div>{item.title}</div>
      <div>{item.creator}</div>
    </div>
  );
}

export default BoardItem;
