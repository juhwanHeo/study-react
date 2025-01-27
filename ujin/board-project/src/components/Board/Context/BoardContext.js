import { createContext, useContext, useReducer } from "react";

const BoardContext = createContext(null);

const BoardDispathcerContext = createContext(null);

export function BoardProvider({ children }) {
    const [boardItems, dispatch] = useReducer(
        boardReducer,
        initialList
    );

    return (
        <BoardContext.Provider value={boardItems}>
            <BoardDispathcerContext.Provider value={dispatch}>
                {children}
            </BoardDispathcerContext.Provider>
        </BoardContext.Provider>
    );
}

export function useBoardItems() {
    return useContext(BoardContext);
}

export function useBoardDispatch() {
    return useContext(BoardDispathcerContext);
}

function boardReducer(items, action) {
    switch(action.type)  {
        case 'INIT': {
            return action.initData
        }
        case 'Create': {
            const newItem = {
                "id": window.crypto.randomUUID(),
                "title": `title ${items.length + 1}`,
                "content": `blabla ${items.length + 1}`,
                "creator": `creator ${items.length + 1}`
            }
            return [...items, newItem]
        }
        case 'Delete': {
            return items.filter((item) => {
                if (item.id !== action.id) return true
            })
        }
        case 'Search': {
            return action.data
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialList = [];