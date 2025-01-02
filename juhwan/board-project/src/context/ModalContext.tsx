import { createContext, Dispatch, useReducer } from "react";

export enum Mode {
  NONE,
  CREATE,
  UPDATE,
  DELETE,
}

export interface ModalProps {
  onClose: () => void;
}

export interface ModalBoardItem {
  id: number;
  seq?: number;
  title?: string;
  content?: string;
  creator?: string;
}

export interface ModalItem {
  data?: ModalBoardItem;
  open: boolean;
  mode: Mode;
}

export enum ModalActionType {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
}

type ModalAction =
  | { type: ModalActionType.OPEN_MODAL; modalItem: ModalItem }
  | { type: ModalActionType.CLOSE_MODAL };

type ModalDispatch = Dispatch<ModalAction>;

function reducer(state: ModalItem, action: ModalAction) {
  switch (action.type) {
    case ModalActionType.OPEN_MODAL: {
      return {
        open: true,
        mode: action.modalItem.mode,
        data: action.modalItem.data,
      };
    }
    case ModalActionType.CLOSE_MODAL: {
      return {
        open: false,
        mode: Mode.NONE,
      };
    }
    default: {
      throw Error("Unknown action");
    }
  }
}

export const ModalContext = createContext<ModalItem | null>(null);
export const ModalDispatchContext = createContext<ModalDispatch | null>(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function ModalProvider({ children }: Props): JSX.Element {
  const [modalItem, dispatch] = useReducer(reducer, {
    open: false,
    mode: Mode.NONE,
  });

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <ModalContext.Provider value={modalItem}>
        {children}
      </ModalContext.Provider>
    </ModalDispatchContext.Provider>
  );
}
