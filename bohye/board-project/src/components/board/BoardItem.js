import { useState } from "react";
import CreateUpdate from "./cud/CreateUpdate";
import Delete from "./cud/Delete";
import Button from "../common/button/Button";
import classes from "./BoardItem.module.css";

function BoardItem({ item, index, updateItem, deleteItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = (updatedItem) => {
    updateItem(updatedItem.id, updatedItem);
    toggleEditing(false);
  };

  const handleDelete = () => {
    deleteItem(item.id);
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
            <Button className={classes.btn} onClick={toggleEditing}>
              Update
            </Button>
            <Delete className={classes.btn} onDelete={handleDelete}>
              Delete
            </Delete>
          </div>
        </div>
      )}
      {isEditing && (
        <CreateUpdate
          mode="update"
          item={item}
          onSubmit={handleSave}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}

export default BoardItem;
