import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegisterUser from "./pages/register/Register";
import AdminPage from "./components/adminpage/AdminPage";
import WorkerPage from "./components/workerpage/WorkerPage";
import NotFound from "./pages/notfound/NotFound";
import Checking from "./components/checkingpage/Checking";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/workerpage" element={<WorkerPage />} />
          <Route path="/checking" element={<Checking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
