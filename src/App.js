import "./App.css";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import RegisterUser from "./pages/register/Register";
import AdminPage from "./components/admin/AdminPage";
import NotFound from "./pages/notfound/NotFound";
import Checking from "./components/checking/Checking";
import { AuthContext } from "./context/AuthContext/AuthContext";
import Warping from "./components/warping/Warping";
import Looming from "./components/looming/Looming";
import YarnStorage from "./components/yarnstorage/YarnStorage";
import Winding from "./components/winding/Winding";
import Repairing from "./components/repairing/Repairing";
import Packing from "./components/packing/Packing";
import Tracking from "./components/tracking/Tracking";
//-----------

function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route
              path="registeruser"
              element={
                <RequireAuth>
                  <RegisterUser />
                </RequireAuth>
              }
            />
            <Route
              path="adminpage"
              element={
                <RequireAuth>
                  <AdminPage />
                </RequireAuth>
              }
            />
            <Route
              path="tracking"
              element={
                <RequireAuth>
                  <Tracking id="2" />
                </RequireAuth>
              }
            />
            <Route
              path="checking"
              element={
                <RequireAuth>
                  <Checking />
                </RequireAuth>
              }
            />
            <Route
              path="warping"
              element={
                <RequireAuth>
                  <Warping />
                </RequireAuth>
              }
            />
            <Route
              path="looming"
              element={
                <RequireAuth>
                  <Looming />
                </RequireAuth>
              }
            />
            <Route
              path="yarnstorage"
              element={
                <RequireAuth>
                  <YarnStorage />
                </RequireAuth>
              }
            />
            <Route
              path="winding"
              element={
                <RequireAuth>
                  <Winding />
                </RequireAuth>
              }
            />
            <Route
              path="repairing"
              element={
                <RequireAuth>
                  <Repairing />
                </RequireAuth>
              }
            />
            <Route
              path="packing"
              element={
                <RequireAuth>
                  <Packing />
                </RequireAuth>
              }
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
