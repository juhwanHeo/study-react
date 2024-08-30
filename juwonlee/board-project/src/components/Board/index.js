import { useState, useEffect } from 'react'
import  './Board.css'
import Header from './Header'
import { BoardItem, NoItem } from './BoardItem'

function ItemWrapper({ items }) {
  return (
    <div className='item-wrapper'>
      {
        !items.length ?
          <NoItem /> : items.map((item, index) => (<BoardItem key={ `key_${index}` } item={ item } />))
      }
    </div>
  );
}

function Board() {
  const items = [
    {
      seq: 1,
      title: 'title 1',
      creator: 'creator 1',
    },
    {
      seq: 2,
      title: 'title 2',
      creator: 'creator 2',
    },
    {
      seq: 3,
      title: 'title 3',
      creator: 'creator 3',
    },
  ];

  return (
    <main>
      <Header />
      <ItemWrapper items={ items } />
    </main>
  );
}

const loadItems = async () => {
  const res = await fetch("http://heojh.iptime.org:8003/board");
  return await res.json();
}

function RemoteBoard() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    loadItems().then((res) => setItems(res || []))
  }, [items]);

  return (
    <main>
      <Header />
      <ItemWrapper items={ items } />
    </main>
  );
}

export { Board, RemoteBoard };
