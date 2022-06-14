import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";

import handleFilter from "./handleFilter";

const getFirebaseEmployees = (
  setLoading,
  setFilteredEmployees,
  filterStatus
) => {
  try {
    const unsub = onSnapshot(collection(db, "employees"), (snapshot) => {
      setLoading(true);
      let employeesArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));

      setFilteredEmployees(employeesArr);
      setLoading(false);
      handleFilter(employeesArr, filterStatus, setFilteredEmployees);
    });
    return unsub;
  } catch (err) {
    console.log(err);
  }
};

export default getFirebaseEmployees;
