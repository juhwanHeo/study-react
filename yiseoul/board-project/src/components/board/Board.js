import { useState, useEffect } from 'react'
import BoardHeader from './BoardHeader';
import BoardItem from './BoardItem';
import Create from "./cud/Create";
import Search from "./search";

function Board({boardItems, useCreate, useDelete, useEdit}) {
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [inqValue, setInqValue] = useState('');

  useEffect(() => {
    const validItems = Array.isArray(boardItems) ? boardItems : [];
    const mapItems = validItems.map((item) => ({key: crypto.randomUUID(), ...item}))

    setItems(mapItems);
    setFilterItems([...mapItems]);
  }, [boardItems]);

  useEffect(() => {
    setFilterItems(() => { return items.filter(({title}) => !inqValue || title.includes(inqValue)); });
  }, [items, inqValue]);

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

  const handleSearch = (value) => {
    setInqValue(value);
  };

  return (
    <div className="board-container">
      <Search event={handleSearch} value={inqValue} />
      <div className="board">
        <BoardHeader />
        <BoardItem items={filterItems} onDelete={handleDelete} onUpdate={handleEdit} />
        <Create event={handleCreate} />
      </div>
    </div>
  );
}

export default Board;