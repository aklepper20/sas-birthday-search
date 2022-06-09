import React from "react";

import styled from "styled-components";

import EmployeeDescription from "./EmployeeDescription";
import EmployeeList from "./EmployeeList";

function EmployeeDetails() {
  return (
    <Wrapper>
      <EmployeeDescription />
      <EmployeeList />
    </Wrapper>
  );
}

export default EmployeeDetails;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  background: red;
`;
