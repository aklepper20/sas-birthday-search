import { useState, useEffect } from "react";

import styled from "styled-components";
import moment from "moment";
import { Circles } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import MonthList from "./components/MonthList";
import EmployeeDetails from "./components/EmployeeDetails";

import getFirebaseEmployees from "./helpers/getFirebaseEmployees";
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
  console.log(typeof filteredEmployees[0].birthMonth);
  useEffect(() => {
    getFirebaseEmployees(setLoading, setFilteredEmployees, filterStatus);
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
