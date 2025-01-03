import React, { createContext, useReducer, useContext } from "react";
import { boardReducer, initialState } from "../reducers/boardReducer";

const BoardContext = createContext();
const BoardDispatchContext = createContext();

export const BoardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(boardReducer, initialState);
  return (
    <BoardContext.Provider value={state}>
      <BoardDispatchContext.Provider value={dispatch}>
        {children}
      </BoardDispatchContext.Provider>
    </BoardContext.Provider>
  );
};

export const useBoardState = () => {
  return useContext(BoardContext);
};

export const useBoardDispatch = () => {
  return useContext(BoardDispatchContext);
};
