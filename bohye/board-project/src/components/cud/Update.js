import { useState } from "react";
import classes from "./Update.module.css";

function Update({ item, index, setEditMode, saveEdit }) {
  const [formEditData, setFormEditData] = useState({
    title: item.title,
    content: item.content,
    creator: item.creator,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    const updatedItem = {
      ...item,
      title: formEditData.title,
      content: formEditData.content,
      creator: formEditData.creator,
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
            value={formEditData.title}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="creator"
            value={formEditData.creator}
            onChange={inputChangeHandler}
            required
          />
        </div>
      </div>
      <div className={classes.content}>
        <input
          type="text"
          name="content"
          value={formEditData.content}
          onChange={inputChangeHandler}
          required
        />
        <div className={classes.btnBox}>
          <button className={classes.btn} type="submit">
            save
          </button>
          <button
            className={classes.btn}
            type="button"
            onClick={handleCancelClick}
          >
            cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default Update;
