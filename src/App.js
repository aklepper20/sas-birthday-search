import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "./firebase";

import styled from "styled-components";
import axios from "axios";

import MonthList from "./components/MonthList";
import EmployeeDetails from "./components/EmployeeDetails";

function App() {
  const [employeesAPI, setEmployeesAPI] = useState([]);

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
      alert(err);
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

  useEffect(() => {
    getEmployees();
  }, []);

  // useEffect(() => {
  //   postEmployees();
  // }, []);

  return (
    <Wrapper>
      <MonthList />
      <EmployeeDetails />
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
