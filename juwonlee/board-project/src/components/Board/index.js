import { useState, useEffect, useReducer, useContext } from 'react'
import { ItemContext, ItemDispatchContext } from './ItemContext'
import  './Board.css'
import Header from './Header'
import { BoardItem, NoItem } from './BoardItem'
import { ItemModal, AddBtn } from '../Form/ItemModal'
import Search from './Search'

function itemsReducer(items, action) {
  const { type, payload, key } = action
  switch (type) {
    case 'set': {
      return [...payload]
    }
    case 'add': {
      return [...items, payload]
    }
    case 'edit': {
      return items.map((item) => {
        if (item.key === key) return payload
        else return item
      })
    }
    case 'remove': {
      return items.filter(item => item.key !== key)
    }
    default: {
      throw Error(`Unknown action type "${type}"`)
    }
  }
}

function Board() {
  // const [items, setItems] = useState([]);
  const [items, itemDispatch] = useReducer(itemsReducer, [])

  useEffect(() => {
    loadItems()
      .then((res) => itemDispatch({ type: 'set', payload: (res || []).map((item, index) => ({ key: crypto.randomUUID(), seq: index+1, ...item })) }))
  }, []);

  const onSearchHandler = (v) => {
    loadItems(v)
      .then((res) => {
        itemDispatch({ type: 'set', payload: [] })
        if (res) itemDispatch({ type: 'set', payload: res.map((item, index) => ({ key: crypto.randomUUID(), seq: index+1, ...item })) })
      })
  }

  return (
    <main>
      <ItemContext.Provider value={ items }>
        <ItemDispatchContext.Provider value={ itemDispatch }>
          <Search label='검색어를 입력해주세요' onSearch={ onSearchHandler }/>
          <Header />
          <ItemWrapper />
        </ItemDispatchContext.Provider>
      </ItemContext.Provider>
    </main>
  );
}

function ItemWrapper() {
  const [isAddShow, setIsAddShow] = useState(false)
  const [isEditShow, setIsEditShow] = useState(false)
  const [selectedKey, setSelectedKey] = useState(-1)
  const items = useContext(ItemContext)
  const dispatch = useContext(ItemDispatchContext)

  const selectedItemHandler = () => {
    let item = null

    if (selectedKey < 0) {
      item = {
        key: crypto.randomUUID(),
        id: `ID_${crypto.randomUUID()}`,
        seq: items.length + 1,
        title: '',
        content: '',
        creator: ''
      }
    } else {
      const targetIndex = items.findIndex(item => item.key === selectedKey)
      if (targetIndex > -1) item = {...items[targetIndex]}
    }

    return item
  }

  const closeHandler = (flag) => {
    setIsAddShow(flag)
    setIsEditShow(flag)
    setSelectedKey(-1)
  }

  const onAddItem = (v) => {
    dispatch({ type: 'add', payload: v })
  }

  const onEditItem = (v) => {
    dispatch({ type: 'edit', key: v.key, payload: v })
    alert('수정되었습니다.')
  }

  const onRemoveItem = (key) => {
    dispatch({ type: 'remove', key })
    alert('삭제되었습니다.')
  }

  return (
    <div className='item-wrapper'>
      <div className='content'>
        {
          !items.length ?
            <NoItem /> : items.map(item => (<BoardItem key={ item.key } item={ item } onEditAction={(key) => {
              setSelectedKey(key)
              setIsAddShow(false)
              setIsEditShow(true)
            }} onRemoveAction={(key) => {
              setSelectedKey(key)
              onRemoveItem(key)
            }} />))
        }
      </div>
      <hr />
      <AddBtn text='등록' onClick={() => {
        setIsEditShow(false)
        setIsAddShow(true)
      }} />

      {
        isAddShow ?
          <ItemModal title='등록하기' selectedItem={ selectedItemHandler } isShow={ isAddShow } onClose={ closeHandler } actionText='저장' itemHandler={ onAddItem } />
          : <ItemModal title='수정하기' selectedItem={ selectedItemHandler } isShow={ isEditShow } onClose={ closeHandler } actionText='저장' itemHandler={ onEditItem } />
      }
    </div>
  );
}

const loadItems = async (title = '') => {
  const res = await fetch(`http://heojh.iptime.org:8003/board?title=${title}`);
  return await res.json();
}

export default Board;
