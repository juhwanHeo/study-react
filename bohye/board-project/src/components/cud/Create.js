import { useState } from "react";
import classes from "./Create.module.css";
import Button from "./../common/Button";

function Create({ addItem, createAppear }) {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    content: "",
    creator: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateClick = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substring(2, 7),
      title: formData.title,
      content: formData.content,
      creator: formData.creator,
    };
    addItem(newItem);
    setFormData({
      title: "",
      content: "",
      creator: "",
    });
  };

  const handleCreateMode = () => {
    createAppear(false);
  };

  return (
    <div className={classes.createContainer}>
      <p className={classes.createParagraph} onClick={handleCreateMode}>
        Create
      </p>
      <form onSubmit={handleCreateClick}>
        <div className={classes.createInputContainer}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={formData.title}
            onChange={inputChangeHandler}
            required
          />
          <input
            type="text"
            name="content"
            placeholder="content"
            value={formData.content}
            onChange={inputChangeHandler}
            required
          ></input>
          <input
            type="text"
            name="creator"
            placeholder="creator"
            value={formData.creator}
            onChange={inputChangeHandler}
            required
          />
          <Button className={classes.btn}>Create</Button>
        </div>
      </form>
    </div>
  );
}

export default Create;
