import { useEffect } from 'react';
import "./Board.css";
import Search from './Search';
import Create from '../cud/Create';
import BoardItems from './BoardItems';
import { useBoardDispatch, useBoardItems } from './Context/BoardContext';

function Board() {
    const boardList = useBoardItems();
    const dispatch = useBoardDispatch();

    useEffect(() => {
        getBoardItems()
        .then(res => {
            res.map((item) => {
                item.id = window.crypto.randomUUID()
            })
            dispatch({
                type: 'INIT',
                initData: res
            });
        })
    }, [])

    return(
        <div>
            <section className="searchBar">
                <Search/>
            </section>
            <section className="board">
                <div className="board-header">
                    <h1 onClick={()=> {
                    }}> 
                        ID | Title | Creator | etc
                    </h1>
                    <div>
                    </div>
                </div>
                <div>
                    <BoardItems items={boardList}></BoardItems>
                </div>
            </section>
            <Create/>
        </div>
        
    );
}

async function getBoardItems() {
    const response = await fetch('http://heojh.iptime.org:8003/board');
    return response.json();
}  

export default Board;