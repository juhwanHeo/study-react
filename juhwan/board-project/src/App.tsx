import React, {useEffect, useState} from 'react';
import './App.css';
import Board, {BoardProps} from "./components/board/Board";
import Accordion from "./components/up-state/Accodion";

function App() {
  const boardItems: BoardProps = {
    items: [
      {
        "id": 1,
        "seq": 1,
        "title": "title 1",
        "content": "content 1",
        "creator": "creator 1",
      },
      {
        "id": 2,
        "seq": 2,
        "title": "title 2",
        "content": "content 2",
        "creator": "creator 2",
      },
      {
        "id": 3,
        "seq": 3,
        "title": "title 3",
        "content": "content 3",
        "creator": "creator 3",
      }
    ]
  }

  const [boardItemsProps, setBoardItemsProps] = useState<BoardProps>({items: []});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const apiBoardItems = async (title: string = "") => {
    setIsLoading(true);
    const res = await fetch(`http://heojh.iptime.org:8003/board?title=${title}`);

    setIsLoading(false);
    return await res.json();
  }

  useEffect(() => {
    apiBoardItems().then(res => {
      setBoardItemsProps({items: res || []})
    });
  }, []);

  return (
    <div className="App">
      {/*과제 1, 2*/}
      {/*<div style={{padding: 5}}>*/}
      {/*  <h1>과제 1, 2</h1>*/}
      {/*  <Board items={boardItems.items}/>*/}
      {/*</div>*/}

      {/*과제 3 */}
      <br/>
      <div style={{padding: 5}}>
        {/*<h1>과제 3</h1>*/}
        {
          boardItemsProps?.items.length === 0
            ? <div>loading...</div>
            : <Board items={boardItemsProps.items}/>
        }
      </div>

      {/*<Accordion />*/}
    </div>
  );
}

export default App;
