import Update from "./cud/Update";
import Delete from "./cud/Delete";
import "./Board.css";
import { useRef } from 'react'

function BoardItem({ items, onDelete }) {
    const list = []
    const titleRef = useRef(null)

    function getMap() {
        if (!titleRef.current) {
            titleRef.current = new Map();
          }
          return titleRef.current;
    }

    if (!items || items.length < 1) {
        return (<div>No Contents......</div>);
    }
    items.forEach((e, index) => {
        list.push(
            <a key={e.id + index}>
                <div className="board-body">
                    <div className="post">
                        <span className="post-id"> {e.id} </span>
                        <span className="post-title"  
                        ref = {(node) => {
                            const map = getMap();
                            if (node) {
                                map.set(e.id, node);
                            } else {
                                map.delete(e.id);
                            }
                        }}> {e.title} </span>
                        <span className="post-content"> {e.content} </span>
                        <span className="post-date"> {e.creator} </span>
                        <Update titleId = { e.id } titleRef = { titleRef } />
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