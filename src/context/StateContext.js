import { createContext, useContext, useReducer } from "react";
import { SET_BOOKS } from "../Constants";

const StateContext = createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  books: null,
  activeBook: null,
  readingList: null,
};

export function StateContextProvider({ children }) {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  console.log("state context");
  const fetchBooks = () => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: SET_BOOKS, payload: data });
      });
  };

  const values = {
    ...state,
    fetchBooks,
  };
  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
}
