import React, { createContext, useReducer } from "react";

export const CalorieContext = createContext();

const initialState = {
  entries: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ENTRIES":
      return { ...state, entries: action.payload, loading: false, error: null };
    case "ADD_ENTRY":
      return { ...state, entries: [...state.entries, action.payload], error: null };
    case "UPDATE_ENTRY":
      const updatedEntries = state.entries.map((entry) =>
        entry.id === action.payload.id ? { ...entry, ...action.payload } : entry
      );
      return { ...state, entries: updatedEntries, error: null };
    case "DELETE_ENTRY":
      const filteredEntries = state.entries.filter((entry) => entry.id !== action.payload);
      return { ...state, entries: filteredEntries, error: null };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const CalorieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setEntries = (entries) => {
    dispatch({ type: "SET_ENTRIES", payload: entries });
  };

  const addEntry = (entry) => {
    dispatch({ type: "ADD_ENTRY", payload: entry });
  };

  const updateEntry = (entry) => {
    dispatch({ type: "UPDATE_ENTRY", payload: entry });
  };

  const deleteEntry = (id) => {
    dispatch({ type: "DELETE_ENTRY", payload: id });
  };

  const setError = (error) => {
    dispatch({ type: "SET_ERROR", payload: error });
  };

  return (
    <CalorieContext.Provider value={{ state, setEntries, addEntry, updateEntry, deleteEntry, setError }}>
      {children}
    </CalorieContext.Provider>
  );
};
