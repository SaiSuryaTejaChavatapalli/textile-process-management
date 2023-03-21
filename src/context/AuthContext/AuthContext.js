import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  error: null,
  loading: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        dispatch,
        name: "SST",
        user: state.user,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
