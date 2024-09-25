import { useState } from "react";
import classes from "./Create.module.css";

function Create({ addItem }) {
  const [formData, setFormData] = useState({
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

  const btnSubmitHandler = (e) => {
    e.preventDefault();
    const newItem = {
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

  return (
    <div className={classes.createContainer}>
      <p className={classes.createParagraph}>Create</p>
      <form onSubmit={btnSubmitHandler}>
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
          <button type="submit" className={classes.btn}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
