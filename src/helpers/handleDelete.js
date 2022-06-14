import { deleteDoc, doc } from "firebase/firestore";
import db from "../firebase";

const handleDelete = async (id, filteredEmployees, setFilteredEmployees) => {
  try {
    filteredEmployees.forEach((em) => {
      if (em.id === id) {
        await deleteDoc(doc(db, "employees", em.id));
      }
    });
  } catch (err) {
    console.log(err);
  }

  setFilteredEmployees(filteredEmployees);
};

export default handleDelete;
