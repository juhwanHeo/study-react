import { useState, useEffect } from 'react'
import  './Board.css'
import Header from './Header'
import { BoardItem, NoItem } from './BoardItem'
import { ItemModal, AddBtn } from '../Form/ItemModal'

function Board() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    loadItems().then((res) => setItems((res || []).map((item, index) => ({ seq: index+1, ...item }))))
  }, []);

  const onAddItemHandler = (v) => {
    setItems([...items, v])
  }

  const onEditItemHandler = (v) => {
    const targetIndex = items.findIndex(item => item.id === v.id)
    const tempArr = [...items]
    if (targetIndex > -1) tempArr[targetIndex] = { ...v }
    setItems(tempArr)
    alert('수정되었습니다.')
  }

  const onRemoveItemHandler = (id) => {
    const targetIndex = items.findIndex(item => item.id === id)
    const tempArr = [...items]
    if (targetIndex > -1) tempArr.splice(targetIndex, 1)
    setItems(tempArr)
    alert('삭제되었습니다.')
  }

  return (
    <main>
      <Header />
      <ItemWrapper items={ items } onAddItem={ onAddItemHandler } onEditItem={ onEditItemHandler } onRemoveItem={ onRemoveItemHandler }/>
    </main>
  );
}

function ItemWrapper({ items, onAddItem, onEditItem, onRemoveItem }) {
  const [isAddShow, setIsAddShow] = useState(false)
  const [isEditShow, setIsEditShow] = useState(false)
  const [selectedId, setSelectedId] = useState(-1)

  const selectedItemHandler = () => {
    let item = null

    if (selectedId < 0) {
      item = {
        id: crypto.randomUUID(),
        seq: items.length + 1,
        title: '',
        content: '',
        creator: ''
      }
    } else {
      const targetIndex = items.findIndex(item => item.id === selectedId)
      if (targetIndex > -1) item = {...items[targetIndex]}
    }

    return item
  }

  const closeHandler = (flag) => {
    setIsAddShow(flag)
    setIsEditShow(flag)
    setSelectedId(-1)
  }

  return (
    <div className='item-wrapper'>
      <div className='content'>
        {
          !items.length ?
            <NoItem /> : items.map(item => (<BoardItem key={ `key_${item.id}` } item={ item } onEditAction={(id) => {
              setSelectedId(id)
              setIsAddShow(false)
              setIsEditShow(true)
            }} onRemoveAction={(id) => {
              setSelectedId(id)
              onRemoveItem(id)
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

const loadItems = async () => {
  const res = await fetch("http://heojh.iptime.org:8003/board");
  return await res.json();
}

export default Board;
