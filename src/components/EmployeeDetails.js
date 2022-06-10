import React from "react";

import styled from "styled-components";

import EmployeeDescription from "./EmployeeDescription";
import EmployeeList from "./EmployeeList";

function EmployeeDetails({ employees, setSelectedEmployee, selectedEmployee }) {
  return (
    <Wrapper>
      <EmployeeDescription
        selectedEmployee={selectedEmployee}
        employees={employees}
      />
      <EmployeeList
        employees={employees}
        setSelectedEmployee={setSelectedEmployee}
      />
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
