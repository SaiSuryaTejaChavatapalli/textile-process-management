import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";
const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/orderdetails">Order Details</Link>
          </li>
          <li>
            <Link to="/jobcarddetials">Job Card Details</Link>
          </li>
          <li>
            <Link to="/loomloading">Loom Loading Chart</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/monitor">Monitoring</Link>
          </li>
          <li>
            <Link to="/loomanalysis">Loom Analysis</Link>
          </li>
          <li>
            <Link to="/shiftanalysis">Shift Analysis</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
