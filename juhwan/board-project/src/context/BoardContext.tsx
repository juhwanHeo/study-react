import { createContext, Dispatch, useReducer } from 'react';
import { useBoardFetch } from '../components/board/hook/useBoardFetch';

interface State {
    query: string;
    boardItems: Array<BoardItem>;
}

export interface BoardItem {
    id?: number;
    seq?: number;
    title?: string;
    content?: string;
    creator?: string;
}

export enum BoardActionType {
    SET_QUERY = "SET_QUERY",
    SEARCH_BOARD_ITEM = "SEARCH_BOARD_ITEM",
    CREATE_BOARD_ITEM = "CREATE_BOARD_ITEM",
    UPDATE_BOARD_ITEM = "UPDATE_BOARD_ITEM",
    DELETE_BOARD_ITEM = "DELETE_BOARD_ITEM",
}

type BoardAction =
    | { type : BoardActionType.SET_QUERY, query: string }
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
function reducer(state: State, action: BoardAction) {
    switch (action.type) {
        case BoardActionType.SET_QUERY: {
            return{query: action.query, boardItems: [...state.boardItems] };
        }
        case BoardActionType.SEARCH_BOARD_ITEM: {
            return{...state, boardItems: [...action.boardItems]};
        }
        case BoardActionType.CREATE_BOARD_ITEM: {

            const id = state.boardItems.length + 1;
            return {...state, boardItems: [...state.boardItems, {id: id, ...action.boardItem}]};
        }
        case BoardActionType.UPDATE_BOARD_ITEM: {
            const updated = state.boardItems.map((item) => {
                if (item.id === action.id) return action.boardItem;
                return item;
            });
            return {...state, boardItems: [...updated]};
        }
        case BoardActionType.DELETE_BOARD_ITEM: {
            const filtered = state.boardItems.filter((item) => item.id !== action.id);
            return {...state, boardItems: [...filtered]};
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
    const [state, dispatch] = useReducer(
        reducer,
        {
            query: "",
            boardItems: []
        }
    );
    const {data} = useBoardFetch(state.query);

    return (
        <BoardDispatchContext.Provider value={dispatch}>
            <BoardContext.Provider value={data}>
                {children}
            </BoardContext.Provider>
        </BoardDispatchContext.Provider>
    );
}
