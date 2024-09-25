import { useState } from "react";
import classes from "./BoardItem.module.css";
import Update from "./cud/Update";

function BoardItem({ item, index, updateItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [editMode, setEditMode] = useState(false);

  const editAppear = () => {
    setEditMode(!editMode);
  };

  const saveEdit = (updatedItem) => {
    updateItem(index - 1, updatedItem);
    setEditMode(false);
  };

  return (
    <div className={classes.itemBox}>
      {editMode ? (
        <Update
          item={item}
          index={index}
          setEditMode={setEditMode}
          saveEdit={saveEdit}
        />
      ) : (
        <>
          <div className={classes.item} onClick={toggleExpand}>
            <div>{index}</div>
            <div>{item.title}</div>
            <div>{item.creator}</div>
          </div>
          {isExpanded && (
            <div className={classes.content}>
              <p>{item.content}</p>
              <div className={classes.btnBox}>
                <button className={classes.btn} onClick={editAppear}>
                  수정
                </button>
                <div className={classes.divider}></div>
                <button className={classes.btn}>삭제</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default BoardItem;
