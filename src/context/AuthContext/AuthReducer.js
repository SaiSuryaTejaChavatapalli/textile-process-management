const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, error: null, loading: false };
    case "LOGIN_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};
export default AuthReducer;
