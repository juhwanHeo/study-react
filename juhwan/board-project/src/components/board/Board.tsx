import BoardItem, {BoardItemProps} from "./BoardItem";
import './css/board-style.css';
import {useState} from "react";
import Modal, {ModalProps} from "./cud/Modal";

export enum Mode {
  NONE,
  CREATE,
  UPDATE,
  DELETE,
}

export interface BoardProps {
  items: Array<BoardItemProps>
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

const Board = ({items}: BoardProps) => {
  const [modal, setModal] = useState<ModalProps>({mode: Mode.NONE});
  const [boardItems, setBoardItems] = useState<Array<BoardItemProps>>([...items]);

  const createItem = (title: string, creator: string) => {
    let index = boardItems.length + 1;
    const newItem = {
      id: index,
      title: title,
      creator: creator,
    }

    setBoardItems((prevState) => [...prevState, newItem]);
  }

  const updateItem = (id: number, title: string) => {
    const newBoardItems = [...boardItems];

    for (let i = 0; i < newBoardItems.length; i++) {
      if (newBoardItems[i].id === id) {
        newBoardItems[i].title = title;
        break;
      }
    }

    setBoardItems(newBoardItems);
  }

  const removeItem = (id: number) => {
    const filteredBoardItems = boardItems.filter((boardItem) => boardItem.id !== id);
    setBoardItems(filteredBoardItems);
  }

  const onClose = () => {
    setModal({mode: Mode.NONE});
  }

  return (
    <>
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