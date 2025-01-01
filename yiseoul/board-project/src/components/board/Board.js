import { useState, useEffect } from 'react'
import {useBoard, useBoardContext, ACTIONS} from '../contexts/BaordContext'
import BoardHeader from './BoardHeader';
import BoardItem from './BoardItem';
import Create from './cud/Create';
import Search from './search';

function Board({boardItems}) {
  const items = useBoard();
  const dispatch  = useBoardContext();
  const [filterItems, setFilterItems] = useState([]);
  const [inqValue, setInqValue] = useState('');

  useEffect(() => {
    const validItems = Array.isArray(boardItems) ? boardItems : [];
    const mapItems = validItems.map((item) => ({
      key: crypto.randomUUID(),
      ...item
    }))

    dispatch({ type: ACTIONS.INIT, newItems: mapItems });
    setFilterItems([...mapItems]);
  }, [boardItems]);

  useEffect(() => {
    const filtered = items.filter(({ title }) => !inqValue || title.includes(inqValue));
    setFilterItems(filtered);
  }, [items, inqValue]);

  const handleSearch = (value) => setInqValue(value);

  return (
    <div className="board-container">
      <Search event={handleSearch} value={inqValue} />
      <div className="board">
        <BoardHeader />
        <BoardItem items={filterItems} />
        <Create />
      </div>
    </div>
  );
}

export default Board;