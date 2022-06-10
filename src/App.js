import { useState, useEffect } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import db from "./firebase";

import styled from "styled-components";
import axios from "axios";
import moment from "moment";

import MonthList from "./components/MonthList";
import EmployeeDetails from "./components/EmployeeDetails";

const currMonth = moment();

function App() {
  const [employeesAPI, setEmployeesAPI] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(0);
  const [filterStatus, setFilterStatus] = useState(
    parseInt(currMonth.format("M"))
  );
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

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
    if (employeesAPI?.length >= 100) return;

    try {
      employeesAPI.map(async (em) => {
        const collectionRef = collection(db, "employees");
        const payload = {
          name: `${em.name.first} ${em.name.last}`,
          phone: em.phone,
          email: em.email,
          image: em.picture.large,
          birthday: em.dob.date.slice(0, 10),
          birthMonth: em.dob.date.slice(5, 7),
          department:
            departments[Math.floor(Math.random() * departments.length)],
        };
        await addDoc(collectionRef, payload);
      });
    } catch (err) {
      console.log(err);
    }
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
      alert(err);
    }
  };

  useEffect(() => {
    getEmployees();
    getFirebaseEmployees();
    const handleFilter = () => {
      if (filterStatus === 1) {
        setFilteredEmployees(employees.filter((em) => em.birthMonth === "01"));
      } else if (filterStatus === 2) {
        setFilteredEmployees(employees.filter((em) => em.birthMonth === "02"));
      } else if (filterStatus === 3) {
        setFilteredEmployees(employees.filter((em) => em.birthMonth === "03"));
      } else if (filterStatus === 4) {
        setFilteredEmployees(employees.filter((em) => em.birthMonth === "04"));
      } else if (filterStatus === 5) {
        setFilteredEmployees(employees.filter((em) => em.birthMonth === "05"));
      } else if (filterStatus === 6) {
        setFilteredEmployees(employees.filter((em) => em.birthMonth === "06"));
      } else if (filterStatus === 7) {
        setFilteredEmployees(employees.filter((em) => em.birthMonth === "07"));
      } else if (filterStatus === 8) {
        setFilteredEmployees(employees.filter((em) => em.birthMonth === "08"));
      } else if (filterStatus === 9) {
        setFilteredEmployees(employees.filter((em) => em.birthMonth === "09"));
      } else if (filterStatus === 10) {
        setFilteredEmployees(employees.filter((em) => em.birthMonth === "10"));
      } else if (filterStatus === 11) {
        setFilteredEmployees(employees.filter((em) => em.birthMonth === "11"));
      } else {
        setFilteredEmployees(employees.filter((em) => em.birthMonth === "12"));
      }
    };

    handleFilter();
  }, [filterStatus]);

  return (
    <Wrapper>
      {employees.length > 0 ? (
        <>
          <MonthList
            // employees={employees}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
          <EmployeeDetails
            // employees={employees}
            filteredEmployees={filteredEmployees}
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
