import { ref, update } from "firebase/database";
import { db } from "../../firebase";

function handleButtonClick(id, completed) {
  const processRef = ref(db, "process");

  // Update the database with the new completed status
  update(processRef, { [`process${id}`]: { id, completed } });
}

// function printProcess() {
//   const processRef = ref(db, "process");

//   // Fetch the process object from Firebase and log it to the console
//   onValue(processRef, (snapshot) => {
//     const process = snapshot.val();
//   });
// }

function Tracking({ id }) {
  return (
    <div>
      <button
        className="logout-btn"
        onClick={() => handleButtonClick(id, "yes")}
      >
        Process Completed
      </button>
      <button
        className="logout-btn"
        onClick={() => handleButtonClick(id, "no")}
      >
        Error Occured
      </button>
    </div>
  );
}

// Call the printProcess function to log the process object to the console
export default Tracking;
