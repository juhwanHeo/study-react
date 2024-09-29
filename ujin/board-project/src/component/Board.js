import BoardItem from './BoardItem';
import Create from "./cud/Create";
import "./Board.css";
import { useEffect, useState } from 'react';

function Board() {
    const [boardItems, setBoardItems] = useState([]); 

    function createPost() {
        const newItem = {
            "id": boardItems.length + 1,
            "title": `title ${boardItems.length + 1}`,
            "content": `blabla ${boardItems.length + 1}`,
            "creator": `creator ${boardItems.length + 1}`
        }
        let items = [...boardItems, newItem]
        setBoardItems(items)
    }
    
    function editPost(id) {
        const newTitle = prompt("새로운 title")
        let items = boardItems

        items = items.map((item) => {
            if (item.id === id) {
                item = { ...item, 'title': newTitle }
            }
            return item
        })
        setBoardItems(items)
    }
    
    function deletePost(id) {
        if (!window.confirm("정말 삭제하시겠습니까?")) {
            return true
        }
        let items = boardItems.filter((item) => {
            if (item.id !== id) return true
        })
        setBoardItems(items)
    }

    useEffect(() => {
        getBoardItems()
        .then(res => {
            setBoardItems(res)
        })
    }, [])

    return(
        <div>
            <section className="board">
                <div className="board-header">
                    <h1 onClick={()=> {
                    }}> 
                        Seq | Title | Creator | etc
                    </h1>
                    <div>
                    </div>
                </div>
                <div>
                    <BoardItem items={boardItems} onEdit={ editPost } onDelete={ deletePost }></BoardItem>
                </div>
            </section>
            <Create onClick={ createPost }/>
        </div>
        
    );
}

async function getBoardItems() {
    const response = await fetch('http://heojh.iptime.org:8003/board');
    return response.json();
}  

export default Board;