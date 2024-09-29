import  './BoardItem.css'

function BoardItem({ item, onEditAction, onRemoveAction }) {
  const { id, seq, title, creator } = item

  const removeActionHandler = () => {
    if (window.confirm('선택한 항목을 삭제할까요? \n다시 되돌릴 수 없습니다.')) onRemoveAction(id)
  }

  return (
    <div className="list-item" key={id}>
      <div className="seq">
        <span></span>
        <p>{seq}</p>
      </div>
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="creator">
        <p>{creator}</p>
      </div>
      <div className="action">
        <button onClick={() => onEditAction(id) }>수정</button>
        <button onClick={ removeActionHandler }>삭제</button>
      </div>
    </div>
  );
}

function NoItem() {
  return (
    <div className="list-item">
      <div className="seq">
        <span className="inactive"></span>
        <p></p>
      </div>
      <div className="title">
        <p>No Contents...</p>
      </div>
      <div className="creator">
        <p></p>
      </div>
      <div className="action">
        <p></p>
      </div>
    </div>
  );
}


export { BoardItem, NoItem };
