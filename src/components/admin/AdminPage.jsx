import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import AdminGetIssues from "./AdminGetIssues";
import AdminHome from "./admincomponents/AdminHome";
import Layout from "./Layout";
import RegisterForm from "../../pages/register/Register";
import "./AdminPage.scss";
import AdminOrderDetails from "./admincomponents/AdminOrderDetails";
import AdminJobCardDetails from "./admincomponents/AdminJobCardDetails";
import AdminLoomLoading from "./admincomponents/AdminLoomLoading";
import AdminMonitoring from "./admincomponents/AdminMonitoring";
import AdminLoomAnalysis from "./admincomponents/AdminLoomAnalysis";
import AdminShiftAnalysis from "./admincomponents/AdminShiftAnalysis";
const AdminPage = () => {
  const [adminComp, setAdminComp] = useState("home");
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
    <div className="adminpage">
      <div className="layout">
        <nav>
          <ul>
            <li onClick={() => setAdminComp("home")}>Home</li>
            <li onClick={() => setAdminComp("orderdetails")}>Order Details</li>
            <li onClick={() => setAdminComp("jobdetails")}>Job Card Details</li>
            <li onClick={() => setAdminComp("loomloading")}>
              Loom Loading Chart
            </li>
            <li onClick={() => setAdminComp("registration")}>Registration</li>
            <li onClick={() => setAdminComp("monitoring")}>Monitoring</li>
            <li onClick={() => setAdminComp("loomanalysis")}>Loom Analysis</li>
            <li onClick={() => setAdminComp("shiftanalysis")}>
              Shift Analysis
            </li>
            <li onClick={() => setAdminComp("issues")}>View Worker Issues</li>
          </ul>
        </nav>
      </div>
      <div className="admincompcontainer">
        <div className="admincomp">{adminComp === "home" && <AdminHome />}</div>
        <div className="admincomp">
          {adminComp === "orderdetails" && <AdminOrderDetails />}
        </div>
        <div className="admincomp">
          {adminComp === "jobdetails" && <AdminJobCardDetails />}
        </div>
        <div className="admincomp">
          {adminComp === "loomloading" && <AdminLoomLoading />}
        </div>
        <div className="admincomp">
          {adminComp === "registration" && <RegisterForm />}
        </div>
        <div className="admincomp">
          {adminComp === "monitoring" && <AdminMonitoring />}
        </div>
        <div className="admincomp">
          {adminComp === "loomanalysis" && <AdminLoomAnalysis />}
        </div>
        <div className="admincomp">
          {adminComp === "shiftanalysis" && <AdminShiftAnalysis />}
        </div>
        <div className="admincomp">
          {adminComp === "issues" && <AdminGetIssues />}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

{
  /* <h1>Welcome to AdminPage</h1>
<button type="button" onClick={handleRegisterUser}>
  Register an Account
</button>
<div>
  <button onClick={handleLogout}>Logout</button>
</div>
<AdminGetIssues /> */
}
