import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  error: "",
  loading: false,
  notifications: [],
};

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);
  console.log(state);
  return (
    <AuthContext.Provider
      value={{
        dispatch,
        ...state,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
