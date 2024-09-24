import { useState } from "react";
import classes from "./Create.module.css";

function Create({ addItem }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [creator, setCreator] = useState("");

  const btnSubmitHandler = (e) => {
    e.preventDefault();
    const newItem = {
      title: title,
      content: content,
      creator: creator,
    };
    addItem(newItem);
    setTitle("");
    setContent("");
    setCreator("");
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            name="content"
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
          <input
            type="text"
            name="creator"
            placeholder="creator"
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
          />
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
