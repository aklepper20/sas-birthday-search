import { deleteDoc, doc } from "firebase/firestore";
import db from "../firebase";

const handleDelete = (id, filteredEmployees, setFilteredEmployees) => {
  filteredEmployees.forEach((em) => {
    if (em.id === id) {
      deleteDoc(doc(db, "employees", em.id));
    }
  });
  setFilteredEmployees(filteredEmployees);
};

export default handleDelete;
