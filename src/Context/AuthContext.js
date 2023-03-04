import { createContext, useReducer } from "react";

const initialState = {
  user: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export const AuthContex = createContext();

export const AuthContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContex.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContex.Provider>
  );
};
