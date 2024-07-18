import React from "react";

const Menu = ({ site }) => {
  return (
    <>
      {site.map((item) => (
        <div key={item.id}>
          <a href={item.link}>{item.title}</a>
        </div>
      ))}
    </>
  );
};

export default Menu;
