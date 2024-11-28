import { useState, useEffect } from 'react'
import BoardHeader from './BoardHeader';
import BoardItem from './BoardItem';
import Create from "./cud/Create";

function Board({boardItems, useCreate, useDelete, useEdit}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const validItems = Array.isArray(boardItems) ? boardItems : [];
    setItems(validItems.map((item) => ({key: crypto.randomUUID(), ...item})));
  }, [boardItems]);

  const handleEdit = (key, { title }) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.key === key ? { ...item, title: title } : item
      )
    );
  };

  const handleDelete = (key) => {
    setItems(items.filter(item => item.key !== key));
  };

  const handleCreate = (newItem) => {
    const newSeq = items.length ? items[items.length - 1].seq + 1 : 1;
    newItem = {
      key: crypto.randomUUID(),
      seq: newSeq,
      title: newItem.title || '',
      creator: newItem.creator || '',
    };
    setItems([...items, newItem]);
  };


  return (
    <div className="board-container">
      <div className="board">
        <BoardHeader/>
        <BoardItem items={items} onDelete={handleDelete} onUpdate={handleEdit} />
        <Create event={handleCreate}></Create>
      </div>
    </div>
  );
}

export default Board;