import './board.css';
import Delete from "./cud/Delete";
import Update from "./cud/Update";

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
            <NoItem/>
        ) : (
            items.map((item) => (
                <div className="board-row" key={item.key}>
                  <div className="board-item">{item.seq}</div>
                  <div className="board-item">{item.title}</div>
                  <div className="board-item">{item.creator}</div>
                  <div className="board-item row">
                    <Delete row={item} />
                    <Update row={item} />
                  </div>
                </div>
            ))
        )}
      </>
  );
}

export default BoardItem;