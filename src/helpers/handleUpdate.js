import { setDoc, doc } from "firebase/firestore";
import db from "../firebase";

const handleUpdate = (id, inputs, filteredEmployees) => {
  try {
    filteredEmployees.forEach(async (em) => {
      if (em.id === id) {
        await setDoc(doc(db, "employees", em.id), {
          name: em.name,
          phone: em.phone,
          email: em.email,
          image: em.image,
          birthday: em.birthday,
          day: em.day,
          birthMonth: em.birthMonth,
          department: inputs,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export default handleUpdate;
