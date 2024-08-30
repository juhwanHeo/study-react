import  './BoardItem.css'

function BoardItem({ item }) {
  const { seq, title, creator } = item;
  return (
    <div className="list-item">
      <div className="seq">
        <span></span>
        <p>{ seq }</p>
      </div>
      <div className="title">
        <p>{ title }</p>
      </div>
      <div className="creator">
        <p>{ creator }</p>
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
    </div>
  );
}


export { BoardItem, NoItem };
