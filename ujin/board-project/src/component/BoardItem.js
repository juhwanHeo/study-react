import Update from "./cud/Update";
import Delete from "./cud/Delete";
import "./Board.css";

function BoardItem({ items, onEdit, onDelete }) {
    const list = []
    if (!items || items.length < 1) {
        return (<div>No Contents......</div>);
    }
    items.forEach((e, index) => {
        list.push(
            <a key={e.id + index}>
                <div className="board-body">
                    <div className="post">
                        <span className="post-title"> {e.id} </span>
                        <span className="post-title"> {e.title} </span>
                        <span className="post-title"> {e.content} </span>
                        <span className="post-date"> {e.creator} </span>
                        <Update onClick={ () => onEdit(e.id) }/>
                        <Delete onClick={ () => onDelete(e.id) }/>
                    </div>
                </div>
            </a>
        )
    });
    return(
        <section id="boardList">
            {list}
        </section>
    );
}

export default BoardItem;