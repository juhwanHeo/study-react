import './css/board-style.css';
import {Mode} from "./Board";
import {ModalProps} from "./cud/Modal";

export interface BoardItemProps {
  id: number;
  seq?: number;
  title: string;
  content?: string;
  creator: string;
  setModal?(modal: ModalProps): void;
}

const BoardItem = ({ id, seq, title, creator, setModal }: BoardItemProps) => {

  return (
      <>
        <div className="board-item">
          <div>{seq}</div>
          <div>{title}</div>
          <div>{creator}</div>
          <div
              onClick={() => {
                setModal?.({mode: Mode.UPDATE, boardItem: {id, seq, title, creator}});
              }}
          >update</div>
          <div
              onClick={() => {
                setModal?.({mode: Mode.DELETE, boardItem: {id, title}});
              }}
          >delete</div>
        </div>
      </>
  );
}

export default BoardItem;
