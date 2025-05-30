import Input from '../Input'

function ItemModal({ title, selectedItem, actionText, itemHandler, isShow, onClose }) {
  const item = { ...selectedItem() }

  const onActionHandler = (item) => {
    const { title, content, creator } = item
    if (title?.trim() && content?.trim() && creator?.trim()) {
      itemHandler(item)
      onClose(false)
    } else alert('값을 모두 올바르게 입력해야합니다.')
  }

  return (
    <div className={ `modal-wrapper ${isShow ? 'show' : ''}` }>
      <div className='modal-content'>
        <span className='close' onClick={() => onClose(false)}>&times;</span>
        <p>{ title || '도구창' }</p>
        {
          isShow ?
            <div>
              <Input id='input_title' type='text' label='title' value={ item?.title || '' } onChange={(e) => item.title = e.target.value}/>
              <Input id='input_content' type='text' label='content' value={ item?.content || '' } onChange={(e) => item.content = e.target.value}/>
              <Input id='input_creator' type='text' label='creator' value={ item?.creator || '' } onChange={(e) => item.creator = e.target.value}/>
            </div>
            : null
        }
        <div className='panel'>
          <div className='add-btn' onClick={() => onActionHandler(item)}>{ actionText || '확인' }</div>
        </div>
      </div>
    </div>
  )
}

function AddBtn({text, onClick}) {
  const onClickHandler = () => {
    onClick()
    const itemList = document.querySelectorAll('.list-item') || []
    const lastElement = itemList[itemList.length - 1]
    if (lastElement) lastElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className='add-btn' onClick={ onClickHandler }>{ text || 'Action' }</div>
  )
}

export { ItemModal, AddBtn };
