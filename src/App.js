import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { useContext } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import RegisterUser from "./pages/register/Register";
import AdminPage from "./components/adminpage/AdminPage";
import NotFound from "./pages/notfound/NotFound";
import Checking from "./components/checking/Checking";
import { AuthContext } from "./context/AuthContext/AuthContext";
import Warping from "./components/warping/Warping";
import Looming from "./components/looming/Looming";
import YarnStorage from "./components/yarnstorage/YarnStorage";
import Winding from "./components/winding/Winding";
import Repairing from "./components/repairing/Repairing";
import Packing from "./components/packing/Packing";
function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/registeruser"
            element={
              <RequireAuth>
                <RegisterUser />
              </RequireAuth>
            }
          />
          <Route
            path="/adminpage"
            element={
              <RequireAuth>
                <AdminPage />
              </RequireAuth>
            }
          />
          <Route
            path="/checking"
            element={
              <RequireAuth>
                <Checking />
              </RequireAuth>
            }
          />
          <Route
            path="/warping"
            element={
              <RequireAuth>
                <Warping />
              </RequireAuth>
            }
          />
          <Route
            path="/looming"
            element={
              <RequireAuth>
                <Looming />
              </RequireAuth>
            }
          />
          <Route
            path="/yarnstorage"
            element={
              <RequireAuth>
                <YarnStorage />
              </RequireAuth>
            }
          />
          <Route
            path="/winding"
            element={
              <RequireAuth>
                <Winding />
              </RequireAuth>
            }
          />
          <Route
            path="/repairing"
            element={
              <RequireAuth>
                <Repairing />
              </RequireAuth>
            }
          />
          <Route
            path="/packing"
            element={
              <RequireAuth>
                <Packing />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
