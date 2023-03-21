import { auth } from "../../firebase";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import "./Login.scss";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassErrMsg, setForgotPassErrMsg] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user.email);
        // navigate("/home");
        // Create a reference to "users"
        const usersRef = ref(db, "users");

        // Read data from "users"
        onValue(usersRef, (snapshot) => {
          const data = snapshot.val();
          let demo = Object.entries(data);
          const filteredList = demo.filter(
            (item) => item[1].email === user.email
          );
          const AdminOrNot = filteredList[0][1].isAdmin;
          AdminOrNot === "yes"
            ? navigate("/adminpage")
            : navigate("/workerpage");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  // const handleRegisterUser = () => {
  //   navigate("/registeruser");
  // };
  // const handleForgotPassword = () => {
  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       // Password reset email sent!
  //       // ..
  //       setForgotPassErrMsg("Reset Password link successfully");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // };
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <div>
          <EmailIcon className="icon" />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <KeyIcon className="icon" />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
        {/* <button type="button" onClick={handleRegisterUser}>
          Register
        </button>
        <button onClick={handleForgotPassword}>Forgot password?</button>
        <div>{forgotPassErrMsg && <span>{forgotPassErrMsg}</span>}</div> */}
      </form>
    </div>
  );
};

export default Login;
