import React from "react";
import { useNavigate } from "react-router-dom";
const AdminPage = () => {
  const navigate = useNavigate();
  const handleRegisterUser = () => {
    navigate("/registeruser");
  };
  return (
    <div>
      <h1>Welcome to AdminPage</h1>
      <button type="button" onClick={handleRegisterUser}>
        Register an Account
      </button>
    </div>
  );
};

export default AdminPage;
