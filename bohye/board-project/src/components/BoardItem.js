import { useState } from "react";
import classes from "./BoardItem.module.css";
import Update from "./cud/Update";
import Button from "./common/Button";
import Delete from "./cud/Delete";

function BoardItem({ item, index, updateItem, deleteItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const saveEdit = (updatedItem) => {
    updateItem(updatedItem.key, updatedItem);
    setEditMode(false);
  };

  const handleDelete = () => {
    deleteItem(item.key);
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
                <Button className={classes.btn} onClick={toggleEditMode}>
                  Update
                </Button>
                <Delete className={classes.btn} onDelete={handleDelete}>
                  Delete
                </Delete>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default BoardItem;
