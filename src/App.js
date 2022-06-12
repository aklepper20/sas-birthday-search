import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "./firebase";

import styled from "styled-components";
import axios from "axios";
import moment from "moment";
import { Circles } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import MonthList from "./components/MonthList";
import EmployeeDetails from "./components/EmployeeDetails";

import departments from "./helpers/departments";
import getMonth from "./helpers/getMonth";
import handleFilter from "./helpers/handleFilter";
import getEmployees from "./helpers/getEmployees";

const currMonth = moment();

function App() {
  const [employeesAPI, setEmployeesAPI] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(0);
  const [filterStatus, setFilterStatus] = useState(
    parseInt(currMonth.format("M"))
  );
  const [monthName, setMonthName] = useState(currMonth.format("MMMM"));
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
  }, [filterStatus]);

  useEffect(() => {
    getEmployees(employeesAPI, setEmployeesAPI);
  }, []);

  return (
    <Wrapper>
      {!loading && filteredEmployees.length > 0 ? (
        <>
          <MonthList
            setMonthName={setMonthName}
            monthName={monthName}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
          <EmployeeDetails
            filteredEmployees={filteredEmployees}
            selectedEmployee={selectedEmployee}
            setSelectedEmployee={setSelectedEmployee}
            monthName={monthName}
          />
        </>
      ) : (
        <Loader>
          <Circles color="#0b090a" height={100} width={100} />
        </Loader>
      )}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background: #f5f5f5;
  height: 100%;
  width: 100%;
  display: flex;
  font-family: "Poppins", sans-serif;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Loader = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
