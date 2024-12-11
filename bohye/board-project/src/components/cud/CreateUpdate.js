import { useState, useEffect } from "react";
import classes from "./CreateUpdate.module.css";
import Button from "../common/Button";

function CreateUpdate({ mode, item, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    creator: "",
  });

  useEffect(() => {
    if (mode === "update" && item) {
      setFormData({
        title: item.title || "",
        content: item.content || "",
        creator: item.creator || "",
      });
    }
  }, [mode, item]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "create") {
      onSubmit({
        key: crypto.randomUUID(),
        ...formData,
      });
    } else if (mode === "update") {
      onSubmit({
        ...item,
        ...formData,
      });
    }
    setFormData({ title: "", content: "", creator: "" });
    onClose();
  };

  if (!onClose) return null;

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <button className={classes.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{mode === "create" ? "Create New Item" : "Update Item"}</h2>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={inputChangeHandler}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label>Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={inputChangeHandler}
              required
            ></textarea>
          </div>
          <div className={classes.formGroup}>
            <label>Creator</label>
            <input
              type="text"
              name="creator"
              value={formData.creator}
              onChange={inputChangeHandler}
              required
            />
          </div>
          <Button className={classes.submitBtn}>
            {mode === "create" ? "Submit" : "Save"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateUpdate;
