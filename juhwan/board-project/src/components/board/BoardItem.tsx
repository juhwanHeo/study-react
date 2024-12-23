import { useContext } from 'react';
import './css/board-style.css';
import { ModalActionType, ModalDispatchContext, Mode } from '../../context/ModalContext';

export interface BoardItemProps {
  id: number;
  seq?: number;
  title: string;
  content?: string;
  creator: string;
}

const BoardItem = ({ id, seq, title, creator }: BoardItemProps) => {
  const modalDispatch = useContext(ModalDispatchContext);

  return (
      <>
        <div className="board-item">
          <div>{seq}</div>
          <div>{title}</div>
          <div>{creator}</div>
          <div
              onClick={() => {
                // dispatch update
                modalDispatch?.({
                  type: ModalActionType.OPEN_MODAL,
                  modalItem: {
                    open: true,
                    mode: Mode.UPDATE,
                    data: {id, seq, title, creator}
                  }
                })
              }}
              >update</div>
          <div
              onClick={() => {
                // dispatch delete
                modalDispatch?.({
                  type: ModalActionType.OPEN_MODAL,
                  modalItem: {
                    open: true,
                    mode: Mode.DELETE,
                    data: {id}
                  }
                })
              }}
          >delete</div>
        </div>
      </>
  );
}

export default BoardItem;
