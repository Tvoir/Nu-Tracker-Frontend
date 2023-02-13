import React, { useReducer, useContext } from 'react';
import axios from 'axios';

const initialState = {
  user: null,
  loading: true,
  error: null
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        loading: false,
        error: null
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (username, password) => {
    try {
      const res = await axios.post('localhost:5000/login', {
        username,
        password
      });
      dispatch({ type: 'LOGIN', payload: res.data });
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.message });
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <UserContext.Provider
      value={{ user: state.user, loading: state.loading, error: state.error, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };