import { createContext, Dispatch, useReducer } from 'react';

export interface BoardItem {
    id?: number;
    seq?: number;
    title?: string;
    content?: string;
    creator?: string;
}

export enum BoardActionType {
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

/*
* reducer
*/
function reducer(state: Array<BoardItem>, action: BoardAction) {
    switch (action.type) {
        case BoardActionType.SEARCH_BOARD_ITEM: {
            return [...action.boardItems];
        }
        case BoardActionType.CREATE_BOARD_ITEM: {
            const id = state.length + 1;
            return [...state, {id: id, ...action.boardItem}];
        }
        case BoardActionType.UPDATE_BOARD_ITEM: {
            const updated = state.map((item) => {
                if (item.id === action.id) return action.boardItem;
                return item;
            });
            return [...updated];
        }
        case BoardActionType.DELETE_BOARD_ITEM: {
            const filtered = state.filter((item) => item.id !== action.id);
            return [...filtered];
        }
        default: {
            throw Error('Unknown action');
        }
    }
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export function BoardProvider({ children }: Props): JSX.Element {
    const [boardItems, dispatch] = useReducer(
        reducer,
        []
    );

    return (
        <BoardDispatchContext.Provider value={dispatch}>
            <BoardContext.Provider value={boardItems}>
                {children}
            </BoardContext.Provider>
        </BoardDispatchContext.Provider>
    );
}
