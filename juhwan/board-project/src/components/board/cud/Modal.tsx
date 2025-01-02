import Update from "./Update";
import Delete from "./Delete";
import Create from "./Create";
import { ModalActionType, ModalContext, ModalDispatchContext, Mode } from "../../../context/ModalContext";
import { useContext } from "react";

const Modal = () => {
  // context
  const {mode, open, data: boardItem} = useContext(ModalContext) || {};
  const modalDispatch = useContext(ModalDispatchContext);

  const onClose = () => {
    modalDispatch?.({ type: ModalActionType.CLOSE_MODAL });
  }

  const modalContent = () => {
    switch (mode) {
      case Mode.CREATE:
        return <Create onClose={onClose} />;
      case Mode.UPDATE:
        return (
          <Update
              id={boardItem?.id || -999}
              seq={boardItem?.seq}
              title={boardItem?.title}
              creator={boardItem?.creator}
              onClose={onClose}
          />
        );
      case Mode.DELETE:
        return (
            <Delete
                id={boardItem?.id || -999}
                title={boardItem?.title}
                onClose={onClose}
            />
        );
      case Mode.NONE:
        return null;
    }
  }

  if (!open) return null;
  return (
      <div id="modal-background" className="hidden">
        <div id="modal">
          {
            modalContent()
          }
        </div>
      </div>
  );
}

export default Modal;