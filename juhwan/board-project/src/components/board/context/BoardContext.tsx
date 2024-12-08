import { createContext, Dispatch } from 'react';

export interface BoardItem {
    id: number;
    seq?: number;
    title: string;
    content?: string;
    creator: string;
}

enum BoardActionType {
    SEARCH_BOARD_ITEM = "SEARCH_BOARD_ITEM",
    CREATE_BOARD_ITEM = "CREATE_BOARD_ITEM",
    UPDATE_BOARD_ITEM = "UPDATE_BOARD_ITEM",
    DELETE_BOARD_ITEM = "DELETE_BOARD_ITEM",
}

type BoardAction =
    | { type : BoardActionType.SEARCH_BOARD_ITEM, boardItems: Array<BoardItem> }
    | { type : BoardActionType.CREATE_BOARD_ITEM, boardItem: BoardItem }
    | { type : BoardActionType.UPDATE_BOARD_ITEM, id: number, boardItem: BoardItem }
    | { type : BoardActionType.DELETE_BOARD_ITEM, id: number }
    ;

type BoardDispatch = Dispatch<BoardAction>;

export const BoardContext = createContext<Array<BoardItem> | null>(null);
export const BoardDispatchContext = createContext<BoardDispatch | null>(null);
