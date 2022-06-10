import { useState, useEffect } from "react";
import { addDoc, collection, doc, writeBatch } from "firebase/firestore";
import db from "./firebase";

import styled from "styled-components";
import axios from "axios";

import MonthList from "./components/MonthList";
import EmployeeDetails from "./components/EmployeeDetails";

function App() {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    console.log(employees);
    try {
      const employeeData = await axios.get(
        "https://randomuser.me/api/?results=200"
      );
      setEmployees(employeeData.data.results);
    } catch (err) {
      console.log(err);
      alert(err);
    }
    // postEmployees();
  };

  console.log(employees);

  const postEmployees = async () => {
    employees.map(async (em) => {
      const collectionRef = collection(db, "employees");
      const payload = {
        name: `${em.name.first} ${em.name.last}`,
      };
      await addDoc(collectionRef, payload);
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    postEmployees();
  }, []);

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
