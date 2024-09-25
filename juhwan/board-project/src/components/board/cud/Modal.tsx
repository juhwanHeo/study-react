import {Mode} from "../Board";
import Update from "./Update";
import Delete from "./Delete";
import Create from "./Create";

export interface ModalMethodProps {
  create?(title: string, creator: string): void;
  update?(id: number, title: string): void;
  remove?(id: number): void;
  onClose?(): void;
}

export interface ModalProps extends ModalMethodProps {
  mode: Mode;
  boardItem?: {
    id: number;
    seq?: number;
    title?: string;
    creator?: string;
  };
}

const Modal = ({mode, boardItem, create, update, remove, onClose}: ModalProps) => {

  const ModalContent = () => {
    switch (mode) {
      case Mode.CREATE:
        return <Create create={create} onClose={onClose} />;
      case Mode.UPDATE:
        return (
          <Update
              id={boardItem?.id || -999}
              seq={boardItem?.seq}
              title={boardItem?.title}
              creator={boardItem?.creator}
              update={update}
              onClose={onClose}
          />
        );
      case Mode.DELETE:
        return (
            <Delete
                id={boardItem?.id || -999}
                title={boardItem?.title}
                remove={remove}
                onClose={onClose}
            />
        );
      case Mode.NONE:
        return null;
    }
  }

  return (
      <div id="modal-background" className="hidden">
        <div id="modal">
          <ModalContent />
        </div>
      </div>
  );
}

export default Modal;