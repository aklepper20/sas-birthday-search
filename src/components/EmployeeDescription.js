import React, { useState, useEffect } from "react";

import styled from "styled-components";

function EmployeeDescription({
  filteredEmployees,
  selectedEmployee,
  monthName,
}) {
  const [activeEmployee, setActiveEmployee] = useState(filteredEmployees[0]);

  useEffect(() => {
    setActiveEmployee(filteredEmployees[selectedEmployee]);
  }, [filteredEmployees, selectedEmployee]);

  return (
    <Wrapper>
      <Title>{monthName} Birthdays</Title>
      <Main>
        <img src={activeEmployee.image} alt={activeEmployee.name} />
        <Description>
          <Name>{activeEmployee.name}</Name>
          <Birthday>
            {monthName} {activeEmployee.birthday.slice(8, 10)},{" "}
            {activeEmployee.birthday.slice(0, 4)}
          </Birthday>
          <Department>Department: {activeEmployee.department}</Department>
          <Email>{activeEmployee.email}</Email>
          <Phone>phone: {activeEmployee.phone}</Phone>
        </Description>
      </Main>
    </Wrapper>
  );
}

export default EmployeeDescription;

const Wrapper = styled.div``;

const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    height: 250px;
    width: 250px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10%;
  }
`;
const Description = styled.div`
  padding-right: 20px;
`;
const Title = styled.h1`
  text-align: center;
`;
const Name = styled.h1`
  margin: 0;
`;
const Birthday = styled.h2`
  margin: 0;
`;
const Department = styled.p``;
const Email = styled.p``;
const Phone = styled.p``;
