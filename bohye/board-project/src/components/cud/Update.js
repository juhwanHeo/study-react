import { useState } from "react";
import classes from "./Update.module.css";
import Button from "../common/Button";

function Update({ item, index, setEditMode, saveEdit }) {
  const [editFormData, setEditFormData] = useState({
    title: item.title,
    content: item.content,
    creator: item.creator,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    const updatedItem = {
      ...item,
      title: editFormData.title,
      content: editFormData.content,
      creator: editFormData.creator,
    };
    saveEdit(updatedItem);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  return (
    <form onSubmit={handleSaveClick}>
      <div className={classes.item}>
        <div>{index}</div>
        <div>
          <input
            type="text"
            name="title"
            value={editFormData.title}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="creator"
            value={editFormData.creator}
            onChange={inputChangeHandler}
            required
          />
        </div>
      </div>
      <div className={classes.content}>
        <input
          type="text"
          name="content"
          value={editFormData.content}
          onChange={inputChangeHandler}
          required
        />
        <div className={classes.btnBox}>
          <Button className={classes.btn}>save</Button>
          <Button
            className={classes.btn}
            type="button"
            onClick={handleCancelClick}
          >
            cancel
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Update;
