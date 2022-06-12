import { useState, useEffect } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import db from "./firebase";

import styled from "styled-components";
import axios from "axios";
import moment from "moment";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import MonthList from "./components/MonthList";
import EmployeeDetails from "./components/EmployeeDetails";

import { Circles } from "react-loader-spinner";

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
          day: parseInt(em.dob.date.slice(8, 10)),
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
  console.log(filteredEmployees);
  useEffect(() => {
    try {
      const unsub = onSnapshot(collection(db, "employees"), (snapshot) => {
        setLoading(true);
        let employeesArr = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFilteredEmployees(employeesArr);
        setLoading(false);
        const handleFilter = () => {
          const arr = [];
          employeesArr.map((em) => {
            if (filterStatus === em.birthMonth) {
              arr.push(em);
            }
          });
          setFilteredEmployees(arr);
        };
        handleFilter();
      });
      return unsub;
    } catch (err) {
      console.log(err);
    }
  }, [filterStatus]);

  // useEffect(() => {
  //   const mergeSort = () => {
  //     if (filteredEmployees.length <= 1) {
  //       return filteredEmployees;
  //     }
  //     let mid = Math.floor(filteredEmployees.length / 2);
  //     let left = mergeSort(filteredEmployees.slice(0, mid));
  //     let right = mergeSort(filteredEmployees.slice(mid));
  //     return merge(left, right);
  //   };
  //   function merge(left, right) {
  //     let sorted = [];
  //     while (left.length && right.length) {
  //       if (left[0].day > right[0].day) {
  //         sorted.push(right.shift());
  //       } else {
  //         sorted.push(left.shift());
  //       }
  //     }
  //     return sorted.concat(left.concat(right));
  //   }
  // }, [filterStatus]);

  useEffect(() => {
    getEmployees();
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
