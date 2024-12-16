import {useContext, useEffect, useRef} from "react";
import { BoardActionType, BoardDispatchContext } from "../../../context/BoardContext";
import { ModalProps } from "../../../context/ModalContext";

interface UpdateProps extends ModalProps {
  id: number;
  seq?: number;
  title?: string;
  creator?: string;
}

const Update = ({id, seq, title, creator, onClose}: UpdateProps) => {
  const editTitle = useRef<HTMLInputElement | null>(null);

  // context
  const boardDispatch = useContext(BoardDispatchContext);

  useEffect(() => {
    if (!editTitle.current) return;
    editTitle.current.value = title || "";
  }, []);

  const update = () => {
    const value = editTitle?.current?.value;
    boardDispatch?.({ type: BoardActionType.UPDATE_BOARD_ITEM, id: id, boardItem: { id, seq, creator, title: value }});
  }

  return (
      <>
        <div>seq: {seq}</div>
        <div>title: <input id={"edit-board-title"} ref={editTitle}/></div>
        <div>creator: {creator}</div>

        <div onClick={() => {
          if (!editTitle?.current?.value.trim()) {
            alert("title 입력해주세요");
            return;
          }
          update();
          onClose()
        }}>Update</div>
        <div onClick={() => {
          onClose()
        }}>Close</div>
      </>
  );
}

export default Update;