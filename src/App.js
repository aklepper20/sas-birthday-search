import { useState, useEffect } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import db from "./firebase";

import styled from "styled-components";
import axios from "axios";
import moment from "moment";

import MonthList from "./components/MonthList";
import EmployeeDetails from "./components/EmployeeDetails";

function App() {
  const [employeesAPI, setEmployeesAPI] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(0);

  const currMoment = moment();

  const departments = [
    "Technology",
    "HR",
    "Strategy",
    "Business",
    "Purchase",
    "Testing",
    "Finance",
    "Operations",
    "Marketing",
    "Sales",
    "General Management",
  ];

  const getEmployees = async () => {
    try {
      const employeeData = await axios.get(
        "https://randomuser.me/api/?results=100"
      );
      setEmployeesAPI(employeeData.data.results);
    } catch (err) {
      console.log(err);
      // alert(err);
    }
    postEmployees();
  };

  const postEmployees = async () => {
    if (employeesAPI.length >= 100) return;

    employeesAPI.map(async (em) => {
      const collectionRef = collection(db, "employees");
      const payload = {
        name: `${em.name.first} ${em.name.last}`,
        phone: em.phone,
        email: em.email,
        image: em.picture.large,
        birthday: em.dob.date.slice(0, 10),
        birthMonth: parseInt(em.dob.date.slice(6, 7)),
        department: departments[Math.floor(Math.random() * departments.length)],
      };
      await addDoc(collectionRef, payload);
    });
  };

  const getFirebaseEmployees = async () => {
    try {
      const collectionRef = collection(db, "employees");
      onSnapshot(collectionRef, (snapshot) => {
        setEmployees(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } catch (err) {
      console.log(err);
      // alert(err);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    getFirebaseEmployees();
  }, []);

  return (
    <Wrapper>
      {employees.length > 0 ? (
        <>
          <MonthList employees={employees} />
          <EmployeeDetails
            employees={employees}
            selectedEmployee={selectedEmployee}
            setSelectedEmployee={setSelectedEmployee}
          />
        </>
      ) : (
        <h3>There are currently no employees...</h3>
      )}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background: blue;
  height: 100vh;
  width: 100vw;
  display: flex;
  font-family: "Poppins", sans-serif;
  margin: 0;
  box-sizing: border-box;
`;
