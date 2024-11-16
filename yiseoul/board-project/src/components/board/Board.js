import { useState, useEffect } from 'react'
import BoardHeader from './BoardHeader';
import BoardItem from './BoardItem';

function Board({boardItems}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const validItems = Array.isArray(boardItems) ? boardItems : [];
    setItems(validItems.map((item) => ({key: crypto.randomUUID(), ...item})));
  }, [boardItems]);


  return (
    <div className="board">
      <BoardHeader />
      <BoardItem items={items} />
    </div>
  );
}

export default Board;