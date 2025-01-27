import React from "react";
import classes from "./BoardHeader.module.css";

function BoardHeader() {
  return (
    <header className={classes.cat}>
      <div>Seq</div>
      <div className={classes.title}>Title</div>
      <div>Creator</div>
    </header>
  );
}

export default BoardHeader;
