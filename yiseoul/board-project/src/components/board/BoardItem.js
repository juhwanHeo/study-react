import './board.css';

function NoItem() {
  return (
    <div className="board-row ful">
      <span>No Contents</span>
    </div>
  );
}

function BoardItem({items}) {
  return (
    <>
      {items.length === 0 ? (
        <NoItem />
      ) : (
        items.map(({seq, title, creator, key}, index) => (
          <div className="board-row" key={key}>
            <div className="board-item">{seq || index + 1}</div>
            <div className="board-item">{title}</div>
            <div className="board-item">{creator}</div>
          </div>
        ))
      )}
    </>
  );
}

export default BoardItem;
