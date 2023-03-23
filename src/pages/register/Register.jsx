import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [isAdmin, setIsAdmin] = useState("yes");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;
      const database = getDatabase();
      await set(ref(database, `users/${userId}`), {
        name,
        email,
        department,
        isAdmin,
      });
      console.log("User data saved successfully.");
      setUserCreated(true);
      // Do something with the user data, such as redirect to another page
    } catch (error) {
      setError(error.message);
    }
  };
  const handleCheckBoxChange = (event) => {
    setIsAdmin(event.target.value);
  };

  return (
    <div className="center">
      <form onSubmit={handleRegister} className="">
        <h1>Register</h1>
        {error && <span>{error}</span>}
        <div>
          <label>Register as Admin?:</label>
          <div>
            <input
              type="radio"
              id="yes"
              name="choose"
              value="yes"
              checked={isAdmin === "yes"}
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="yes">Yes</label>

            <input
              type="radio"
              id="no"
              name="choose"
              value="no"
              checked={isAdmin === "no"}
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <div>
          <label htmlFor="name">
            {isAdmin === "yes" ? "Admin" : "Worker"} Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">
            {isAdmin === "yes" ? "Admin" : "Worker"} Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">
            {isAdmin === "yes" ? "Admin" : "Worker"} Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="department">
            {isAdmin === "yes" ? "Admin" : "Worker"} Department:
          </label>
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="">
              Select {isAdmin === "yes" ? "Admin" : "Worker"} Depot
            </option>
            <option value="yarnstorage">Yarn Storage</option>
            <option value="winding">Winding/Creeling</option>
            <option value="warping">Warping</option>
            <option value="looming">Looming</option>
            <option value="checking">Checking</option>
            <option value="repairing">Repairing</option>
            <option value="packaging">Packaging</option>
          </select>
        </div>

        <div>
          <button type="submit">Register</button>
          <button onClick={() => navigate("/login")}>Login?</button>
        </div>
        <div>
          {userCreated && (
            <span style={{ color: "green", fontWeight: "bold" }}>
              USER CREATED SUCCESSFULLY
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

//
// const RegisterUser = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [userCreated, setUserCreated] = useState(false);
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log(userCredential.user);
//       setUserCreated(true);
//       // Do something with the user data, such as redirect to another page
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <h2>Register as a new worker</h2>
//       {error && <div>{error}</div>}
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Register</button>
//       <button onClick={() => navigate("/login")}>Login?</button>
//       <div>
//         {userCreated && (
//           <span style={{ color: "green", fontWeight: "bold" }}>
//             USER CREATED SUCCESSFULLY
//           </span>
//         )}
//       </div>
//     </form>
//   );
// };

// export default RegisterUser;
