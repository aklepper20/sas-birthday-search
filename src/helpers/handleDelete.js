import { deleteDoc, doc } from "firebase/firestore";
import db from "../firebase";

const handleDelete = (id, filteredEmployees, setFilteredEmployees) => {
  try {
    filteredEmployees.forEach((em) => {
      if (em.id === id) {
        deleteDoc(doc(db, "employees", em.id));
      }
    });
  } catch (err) {
    console.log(err);
  }

  setFilteredEmployees(filteredEmployees);
};

export default handleDelete;
