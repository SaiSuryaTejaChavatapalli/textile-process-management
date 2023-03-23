import { useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import "./AdminGetIssues.scss";
function AdminGetIssues() {
  const [workers, setWorkers] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(true);
  const handleClick = () => {
    const database = getDatabase();
    const workersRef = ref(database, "workersIssues");
    onValue(workersRef, (snapshot) => {
      const workerList = [];
      snapshot.forEach((childSnapshot) => {
        const worker = { key: childSnapshot.key, ...childSnapshot.val() };
        workerList.push(worker);
      });
      setWorkers(workerList);
    });
  };

  const handleResolveClick = (key) => {
    const database = getDatabase();
    const workerRef = ref(database, `workersIssues/${key}`);
    remove(workerRef).then(() => {
      setWorkers((prevWorkers) =>
        prevWorkers.filter((worker) => worker.key !== key)
      );
    });
  };

  return (
    <div className="admin-get-issues">
      <button onClick={handleClick}>Get Workers Issues</button>
      <button onClick={() => setIsDisplayed(!isDisplayed)}>View/Hide</button>
      <ul className={isDisplayed ? "" : "hide-get-issues"}>
        {workers.map((worker) => (
          <li key={worker.key}>
            <span>
              Worker name: <span>{worker.name}</span>
            </span>
            <span>
              Issue: <span>{worker.issue}</span>
            </span>
            <span>
              Department:
              <span>{worker.department}</span>
            </span>
            <span>
              <button onClick={() => handleResolveClick(worker.key)}>
                Resolved
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminGetIssues;

// import { useState } from "react";
// import { getDatabase, ref, onValue } from "firebase/database";

// function AdminDemo() {
//   const [workers, setWorkers] = useState([]);

//   const handleClick = () => {
//     const database = getDatabase();
//     const workersRef = ref(database, "workers");
//     onValue(workersRef, (snapshot) => {
//       const workerList = [];
//       snapshot.forEach((childSnapshot) => {
//         const worker = childSnapshot.val();
//         workerList.push(worker);
//       });
//       setWorkers(workerList);
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Get Workers</button>
//       <ul>
//         {workers.map((worker, index) => (
//           <li key={index}>
//             Name: {worker.name}, Issue: {worker.issue}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AdminDemo;
