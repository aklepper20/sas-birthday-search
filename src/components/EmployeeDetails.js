import React from "react";

import styled from "styled-components";

import EmployeeDescription from "./EmployeeDescription";
import EmployeeList from "./EmployeeList";

function EmployeeDetails({
  setSelectedEmployee,
  selectedEmployee,
  filteredEmployees,
  monthName,
}) {
  return (
    <Wrapper>
      <EmployeeDescription
        selectedEmployee={selectedEmployee}
        filteredEmployees={filteredEmployees}
        monthName={monthName}
      />
      <EmployeeList
        filteredEmployees={filteredEmployees}
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

  margin: 0;
`;
