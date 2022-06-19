import { addDoc, collection } from "firebase/firestore";
import db from "../firebase";

import axios from "axios";

import departments from "./departments";
import getMonth from "./getMonth";

const getEmployees = async (employeesAPI, setEmployeesAPI) => {
  try {
    const employeeData = await axios.get(
      "https://randomuser.me/api/?results=3"
    );
    setEmployeesAPI(employeeData.data.results);
  } catch (err) {
    console.log(err);
    alert(err);
  }

  //will add 3 employees each time program is executed into db
  // try {
  //   employeesAPI.map(async (em) => {
  //     let monthNum = em.dob.date;
  //     let returnedMonth = parseInt(getMonth(monthNum));
  //     const collectionRef = collection(db, "employees");
  //     const payload = {
  //       name: `${em.name.first} ${em.name.last}`,
  //       phone: em.phone,
  //       email: em.email,
  //       image: em.picture.large,
  //       birthday: em.dob.date.slice(0, 10),
  //       day: parseInt(em.dob.date.slice(8, 10)),
  //       birthMonth: returnedMonth,
  //       department: departments[Math.floor(Math.random() * departments.length)],
  //     };
  //     await addDoc(collectionRef, payload);
  //   });
  // } catch (err) {
  //   console.log(err);
  // }
};

export default getEmployees;
