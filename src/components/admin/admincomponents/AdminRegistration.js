import { useState } from "react";
import "./Style.scss";
const AdminRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [error, setError] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [isAdmin, setIsAdmin] = useState("yes");

  return (
    <form className="register">
      <h2>Register</h2>
      {error && <div>{error}</div>}
      <div>
        <div>
          <label>Register as Admin?:</label>
          <div>
            <input
              type="radio"
              id="yes"
              name="choose"
              value="yes"
              checked={isAdmin === "yes"}
            />
            <label htmlFor="yes">Yes</label>

            <input
              type="radio"
              id="no"
              name="choose"
              value="no"
              checked={isAdmin === "no"}
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <div>
          <label htmlFor="name">
            {isAdmin === "yes" ? "Admin" : "User"} Name:
          </label>
          <input type="text" id="name" value={name} required />
        </div>
        <div>
          <label htmlFor="email">
            {isAdmin === "yes" ? "Admin" : "User"} Email:
          </label>
          <input type="email" id="email" value={email} required />
        </div>
        <div>
          <label htmlFor="password">
            {isAdmin === "yes" ? "Admin" : "User"} Password:
          </label>
          <input type="password" id="password" value={password} required />
        </div>
        <div>
          <label htmlFor="phone">
            {isAdmin === "yes" ? "Admin" : "User"} Phone Number:
          </label>
          <input type="tel" id="phone" value={phone} required />
        </div>
        <div>
          <label htmlFor="age">
            {isAdmin === "yes" ? "Admin" : "User"} Age:
          </label>
          <input type="number" id="age" value={age} required />
        </div>
        <div>
          <label htmlFor="gender">
            {isAdmin === "yes" ? "Admin" : "User"} Gender:
          </label>
          <select id="gender" value={gender} required>
            <option value="">
              Select {isAdmin === "yes" ? "Admin" : "User"} Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="nationality">
            {isAdmin === "yes" ? "Admin" : "User"} Nationality:
          </label>
          <input type="text" id="nationality" value={nationality} required />
        </div>
      </div>
      <div>
        <button type="submit">Register</button>
        <button>Login?</button>
      </div>
      <div>
        {userCreated && (
          <span style={{ color: "green", fontWeight: "bold" }}>
            USER CREATED SUCCESSFULLY
          </span>
        )}
      </div>
    </form>
  );
};

export default AdminRegistration;

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
