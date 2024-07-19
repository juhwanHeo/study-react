const Menu = ({ site }) => {
  return (
    <>
      {site.map((item) => (
        <div key={item.id}>
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.title}
          </a>
        </div>
      ))}
    </>
  );
};

export default Menu;
