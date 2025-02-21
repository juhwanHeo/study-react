import {createContext, useReducer, useContext} from 'react';

const BoardContext = createContext(null);
const BoardDispatchContext = createContext(null);

const ACTIONS = {
  ADDED: 'added',
  CHANGED: 'changed',
  DELETED: 'deleted'
};

function initializer(initialItems = []) {
  return initialItems.map((item) => ({
    key: crypto.randomUUID(),
    ...item
  }));
}

function itemsReducer(items, action) {
  switch (action.type) {
    case ACTIONS.ADDED: {
      const {newItem = {}} = action;
      const {key, title = '', creator = ''} = newItem;
      const newSeq = items.length ? items[items.length - 1].seq + 1 : 1;

      if (items.some(item => item.key === key)) {
        throw new Error('Duplicate key: ' + key);
      }

      return [...items, {
        key,
        seq: newSeq,
        title,
        creator,
      }];
    }
    case ACTIONS.CHANGED: {
      const {key, changes} = action;

      return items.map((item) =>
        item.key === key ? { ...item, ...changes } : item
      );
    }
    case ACTIONS.DELETED: {
      const {key} = action;

      return items.filter(item => item.key !== key);
    }
    default: {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}

export function BoardProvider({children, initialItems = []}) {
  const [items, dispatch] = useReducer(itemsReducer, initialItems, initializer);

  return (
      <BoardContext.Provider value={items}>
        <BoardDispatchContext.Provider value={dispatch}>
          {children}
        </BoardDispatchContext.Provider>
      </BoardContext.Provider>
  );
}

export function useBoard() {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('useBoardContext must be used within a BoardProvider');
  }
  return context;
}

export function useBoardContext() {
  const context = useContext(BoardDispatchContext);
  if (!context) {
    throw new Error('useBoardContext must be used within a BoardProvider');
  }
  return context;
}

export {ACTIONS};
