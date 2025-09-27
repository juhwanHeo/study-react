import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBoardDispatch } from "../../contexts/BoardContext";
import CreateUpdate from "./cud/CreateUpdate";
import Delete from "./cud/Delete";
import Button from "../common/button/Button";
import classes from "./BoardItem.module.css";

function BoardItem({ item, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useBoardDispatch();
  const navigate = useNavigate();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const toggleEditing = (e) => {
    e.stopPropagation();
    setIsEditing((prev) => !prev);
  };

  const handleViewDetail = (e) => {
    e.stopPropagation();
    navigate(`/board/${item.id}`);
  };

  const handleSave = (updatedItem) => {
    dispatch({ type: "UPDATE_ITEM", payload: { id: item.id, ...updatedItem } });
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_ITEM", payload: item.id });
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
            <Button className={classes.btn} onClick={handleViewDetail}>
              상세보기
            </Button>
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
