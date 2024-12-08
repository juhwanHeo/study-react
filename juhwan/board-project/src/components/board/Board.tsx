import BoardItem from "./BoardItem";
import './css/board-style.css';
import {useContext, useState} from "react";
import Modal, {ModalProps} from "./cud/Modal";
import { BoardContext } from "./context/BoardContext";
import Search from "./Search";

export enum Mode {
  NONE,
  CREATE,
  UPDATE,
  DELETE,
}

const BoardHeader = () => {
  return (
    <div className="board-header">
      <div>Seq</div>
      <div>Title</div>
      <div>Creator</div>
      <div>etc</div>
    </div>
  );
}

const NoContent = () => {
  return (
    <div>No contents...</div>
  );
}

const Board = () => {
  const [modal, setModal] = useState<ModalProps>({mode: Mode.NONE});
  const boardItems = useContext(BoardContext) || [];

  const createItem = (title: string, creator: string) => {
    let index = boardItems.length + 1;
    const newItem = {
      id: index,
      title: title,
      creator: creator,
    }
  }

  const updateItem = (id: number, title: string) => {
    const newBoardItems = [...boardItems];

    for (let i = 0; i < newBoardItems.length; i++) {
      if (newBoardItems[i].id === id) {
        newBoardItems[i].title = title;
        break;
      }
    }
  }

  const removeItem = (id: number) => {
  }

  const onClose = () => {
    setModal({mode: Mode.NONE});
  }

  return (
    <>
      <Search/>
      <div className={"board-wrapper"}>
        <BoardHeader/>
        {
          boardItems?.length === 0
            ? <NoContent/>
            : boardItems.map((item, idx) => (
                <BoardItem
                    key={crypto.randomUUID()}
                    id={item.id}
                    seq={idx}
                    title={item.title}
                    creator={item.creator}
                    setModal={setModal}
                />
              )
            )
        }
        <div onClick={() => setModal({mode: Mode.CREATE})}>Create</div>
      </div>

      { modal?.mode !==  Mode.NONE
          ? <Modal
              mode={modal.mode}
              boardItem={modal.boardItem}
              create={createItem}
              update={updateItem}
              remove={removeItem}
              onClose={onClose}
          />
          : null
      }
    </>
  );
}

export default Board;