import BoardItem from './BoardItem';
import { useEffect, useState } from 'react';

function Board({ items }) {
    const [boardItems, setBoardItems] = useState(items); 

    useEffect(() => {
        getBoardItems()
        .then(res => {
            setBoardItems(res)
        })
    }, [])

    return(
        <section id="board">
            <div id="board-header">
                <h1 onClick={()=> {
                    console.log(boardItems)
                }}>
                    Seq | Title | Creator
                </h1>
                <div>
                </div>
            </div>
            <div id="board-list" onClick={()=> {setBoardItems([])}}>
                <BoardItem items={boardItems}></BoardItem>
            </div>
        </section>
    );
}

async function getBoardItems() {
    const response = await fetch('http://heojh.iptime.org:8003/board');
    return response.json();
}  

export default Board;