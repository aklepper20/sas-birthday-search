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
  const [selectedEmployee, setSelectedEmployee] = useState(0);
  const [filterStatus, setFilterStatus] = useState(
    parseInt(currMonth.format("M"))
  );
  const [monthName, setMonthName] = useState(currMonth.format("MMMM"));
  const [filteredEmployees, setFilteredEmployees] = useState([]);

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
        let monthNum = em.dob.date;
        const getMonth = (str) => {
          return str[5] === "0"
            ? (str = str.slice(6, 7))
            : (str = str.slice(5, 7));
        };
        let returnedMonth = parseInt(getMonth(monthNum));

        const collectionRef = collection(db, "employees");
        const payload = {
          name: `${em.name.first} ${em.name.last}`,
          phone: em.phone,
          email: em.email,
          image: em.picture.large,
          birthday: em.dob.date.slice(0, 10),
          birthMonth: returnedMonth,
          department:
            departments[Math.floor(Math.random() * departments.length)],
        };
        await addDoc(collectionRef, payload);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "employees"), (snapshot) => {
      let employeesArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFilteredEmployees(employeesArr);

      const handleFilter = () => {
        let statusCount = 1;
        let monthCount = 1;
        const arr = [];
        employeesArr.map((em) => {
          if (filterStatus === em.birthMonth) {
            arr.push(em);
          }
          statusCount++;
          monthCount++;
        });
        setFilteredEmployees(arr);
      };
      handleFilter();
    });

    return unsub;
  }, [filterStatus]);

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <Wrapper>
      {filteredEmployees.length > 0 ? (
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
        <h3>There are currently no employees...</h3>
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
