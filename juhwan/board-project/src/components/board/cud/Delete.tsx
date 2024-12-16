import { useContext } from "react";
import { ModalProps } from "../../../context/ModalContext";
import { BoardActionType, BoardDispatchContext } from "../../../context/BoardContext";

interface DeleteProps extends ModalProps{
  id: number;
  title?: string;
}

const Delete = ({id, title, onClose}: DeleteProps) => {

  // context
  const boardDispatch = useContext(BoardDispatchContext);

  const remove = () => {
    boardDispatch?.({ type: BoardActionType.DELETE_BOARD_ITEM, id});
  }

  return (
      <>
        <div>{title} 을 삭제하시겠습니까?</div>
        <div onClick={() => {
          remove();
          onClose()
        }}>Delete</div>
        <div onClick={() => {
          onClose()
        }}>Close</div>
      </>
  );
}

export default Delete;