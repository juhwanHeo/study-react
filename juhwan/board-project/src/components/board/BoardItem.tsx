import './css/board-style.css';

export interface BoardItemProps {
  id?: number;
  seq: number;
  title: string;
  content?: string;
  creator: string;
}

const BoardItem = ({ seq, title, creator }: BoardItemProps) => {
  return (
    <div className="board-item">
      <div>{seq}</div>
      <div>{title}</div>
      <div>{creator}</div>
    </div>
  );
}

export default BoardItem;
