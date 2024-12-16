import BoardItem from "./BoardItem";
import "./css/board-style.css";
import { useContext } from "react";
import Modal from "./cud/Modal";
import { BoardContext } from "../../context/BoardContext";
import Search from "./Search";
import {
  ModalActionType,
  ModalDispatchContext,
  Mode,
} from "../../context/ModalContext";

const BoardHeader = () => {
  return (
    <div className="board-header">
      <div>Seq</div>
      <div>Title</div>
      <div>Creator</div>
      <div>etc</div>
    </div>
  );
};

const NoContent = () => {
  return <div>No contents...</div>;
};

const Board = () => {
  const boardItems = useContext(BoardContext) || [];
  const modalDispatch = useContext(ModalDispatchContext);

  return (
    <>
      <Search />
      <div className={"board-wrapper"}>
        <BoardHeader />
        {boardItems?.length === 0 ? (
          <NoContent />
        ) : (
          boardItems.map((item, idx) => (
            <BoardItem
              key={crypto.randomUUID()}
              id={item.id || 0}
              seq={idx}
              title={item.title || ''}
              creator={item.creator || ''}
            />
          ))
        )}
        <div
          onClick={() => {
            // create modal
            modalDispatch?.({
              type: ModalActionType.OPEN_MODAL,
              modalItem: {
                open: true,
                mode: Mode.CREATE,
              },
            });
          }}
        >
          Create
        </div>
      </div>
      <Modal />
    </>
  );
};

export default Board;
