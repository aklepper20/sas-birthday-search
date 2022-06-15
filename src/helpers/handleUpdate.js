import { updateDoc, doc } from "firebase/firestore";
import db from "../firebase";

const handleUpdate = (id, filteredEmployees, setFilteredEmployees) => {
  //   try {
  //     filteredEmployees.forEach(async (em) => {
  //       if (em.id === id) {
  //         await deleteDoc(doc(db, "employees", em.id));
  //       }
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  console.log(id);
  //   setFilteredEmployees(filteredEmployees);
};

export default handleUpdate;
