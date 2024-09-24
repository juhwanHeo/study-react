import { useState } from "react";
import classes from "./BoardItem.module.css";

function BoardItem({ item, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={classes.itemBox}>
      <div className={classes.item} onClick={toggleExpand}>
        <div>{index}</div>
        <div>{item.title}</div>
        <div>{item.creator}</div>
      </div>
      {isExpanded && (
        <div className={classes.content}>
          <p>{item.content}</p>
          <div className={classes.btnBox}>
            <button className={classes.btn}>수정</button>
            <div className={classes.divider}></div>
            <button className={classes.btn}>삭제</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoardItem;
