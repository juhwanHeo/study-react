import Update from "../cud/Update";
import Delete from "../cud/Delete";
import "./Board.css";
import { useRef } from 'react'
import { useBoardDispatch } from "./Context/BoardContext";

function BoardItems({ items }) {
    const list = []
    const titleRef = useRef(null)
    const dispatch = useBoardDispatch();

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
                        <Delete onClick={ () => {
                            dispatch({
                               type: 'Delete',
                               id: e.id 
                            });
                        }}/>
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

export default BoardItems;