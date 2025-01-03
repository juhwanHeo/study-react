import { useState, useEffect } from 'react'
import {useBoard} from '../contexts/BaordContext'
import BoardHeader from './BoardHeader';
import BoardItem from './BoardItem';
import Create from './cud/Create';
import Search from './search';

function Board() {
  const items = useBoard();
  const [filterItems, setFilterItems] = useState([]);
  const [inqValue, setInqValue] = useState('');

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