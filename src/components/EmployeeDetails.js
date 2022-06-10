import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";

import styled from "styled-components";

import EmployeeDescription from "./EmployeeDescription";
import EmployeeList from "./EmployeeList";

function EmployeeDetails() {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
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
  }, []);

  return (
    <Wrapper>
      <EmployeeDescription />
      <EmployeeList employees={employees} />
    </Wrapper>
  );
}

export default EmployeeDetails;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background: red;
  margin: 0;
`;
