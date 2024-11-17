import { useRef } from "react";
import classes from "./Update.module.css";
import Button from "../common/Button";

function Update({ item, index, setEditMode, saveEdit }) {
  const titleRef = useRef();
  const contentRef = useRef();
  const creatorRef = useRef();

  const handleSaveClick = (e) => {
    e.preventDefault();
    const updatedItem = {
      ...item,
      title: titleRef.current.value,
      content: contentRef.current.value,
      creator: creatorRef.current.value,
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
            defaultValue={item.title}
            ref={titleRef}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="creator"
            defaultValue={item.creator}
            ref={creatorRef}
            required
          />
        </div>
      </div>
      <div className={classes.content}>
        <input
          type="text"
          name="content"
          defaultValue={item.content}
          ref={contentRef}
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
