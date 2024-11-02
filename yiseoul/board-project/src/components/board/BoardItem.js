
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

function BoardItem({items, onUpdate, onDelete}) {
  return (
      <>
        {items.length === 0 ? (
            <NoItem/>
        ) : (
            items.map((item, index) => (
                <div className="board-row" key={item.key}>
                  <div className="board-item">{item.seq}</div>
                  <div className="board-item">{item.title}</div>
                  <div className="board-item">{item.creator}</div>
                  <div className="board-item row">
                    <Delete event={() => onDelete(item.key)} />
                    <Update event={onUpdate} row={item} />
                  </div>
                </div>
            ))
        )}
      </>
  );
}

export default BoardItem;