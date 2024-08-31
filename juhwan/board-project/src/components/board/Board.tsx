import BoardItem, {BoardItemProps} from "./BoardItem";
import './css/board-style.css';

export interface BoardProps {
  items: Array<BoardItemProps>
}

const BoardHeader = () => {
  return (
    <div className="board-header">
      <div>Seq</div>
      <div>Title</div>
      <div>Creator</div>
    </div>
  );
}

const NoContent = () => {
  return (
    <div>No contents...</div>
  );
}

const Board = ({items}: BoardProps) => {
  return (
    <>
      <div className={"board-wrapper"}>
        <BoardHeader/>
        {
          items?.length === 0
            ? <NoContent/>
            : items.map((item, idx) => (
                <BoardItem key={idx} seq={item.seq || idx} title={item.title} creator={item.creator}/>
              )
            )
        }
      </div>
    </>
  );
}

export default Board;