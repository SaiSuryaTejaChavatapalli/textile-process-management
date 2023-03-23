import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import AdminGetIssues from "./AdminGetIssues";

const AdminPage = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegisterUser = () => {
    navigate("/registeruser");
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome to AdminPage</h1>
      <button type="button" onClick={handleRegisterUser}>
        Register an Account
      </button>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <AdminGetIssues />
    </div>
  );
};

export default AdminPage;
