import {useContext, useState} from "react";
import { BoardActionType, BoardDispatchContext } from "../../../context/BoardContext";
import { ModalProps } from "../../../context/ModalContext";

interface CreateProps extends ModalProps {
}

const Create = ({onClose} : CreateProps) => {
  // state
  const [title, setTitle] = useState<string>('');
  const [creator, setCreator] = useState<string>('');

  // context
  const boardDispatch = useContext(BoardDispatchContext);

  const create = () => {
    boardDispatch?.({
      type: BoardActionType.CREATE_BOARD_ITEM,
      boardItem: {
        title: title,
        creator: creator,
        content: undefined,
      }
    })
  }

  return (
      <>
        <div>title: <input id={"edit-board-title"} value={title} onChange={(e) => setTitle(e.target.value)}/></div>
        <div>creator: <input id={"edit-board-creator"} value={creator} onChange={(e) => setCreator(e.target.value)}/></div>

        <div onClick={() => {
          if (!title?.trim()) {
            alert("title 입력해주세요");
            return;
          }
          if (!creator?.trim()) {
            alert("creator 입력해주세요");
            return;
          }
          create();
          onClose()
        }}>Create
        </div>
        <div onClick={() => {
          onClose()
        }}>Close
        </div>
      </>
  );
}

export default Create;