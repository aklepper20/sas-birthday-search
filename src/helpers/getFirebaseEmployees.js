import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";

import handleFilter from "./handleFilter";

const getFirebaseEmployees = (setFilteredEmployees, filterStatus) => {
  try {
    const unsub = onSnapshot(collection(db, "employees"), (snapshot) => {
      let employeesArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      handleFilter(employeesArr, filterStatus, setFilteredEmployees);
      console.log(employeesArr);
    });
    return unsub;
  } catch (err) {
    console.log(err);
  }
};

export default getFirebaseEmployees;
