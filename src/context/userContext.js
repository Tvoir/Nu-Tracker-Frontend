import React, { createContext, useReducer } from 'react';

const initialState = {
  user: null,
  error: null,
};

const userContext = createContext(initialState);

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        error: null,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = (user) => {
    dispatch({
      type: 'LOGIN',
      payload: user,
    });
  };

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  const setError = (error) => {
    dispatch({
      type: 'ERROR',
      payload: error,
    });
  };

  return (
    <userContext.Provider
      value={{
        user: state.user,
        error: state.error,
        login,
        logout,
        setError,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export { userContext, UserProvider };