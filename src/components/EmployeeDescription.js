import React, { useState, useEffect } from "react";

import styled from "styled-components";

function EmployeeDescription({ employees, selectedEmployee }) {
  const [activeEmployee, setActiveEmployee] = useState(employees[0]);

  useEffect(() => {
    setActiveEmployee(employees[selectedEmployee]);
  }, [employees, selectedEmployee]);

  return (
    <Wrapper>
      <Name>
        {activeEmployee.name.length > 13
          ? activeEmployee.name.slice(0, 14) + "..."
          : activeEmployee.name}
      </Name>
      <Main>
        <img src={activeEmployee.image} alt={activeEmployee.name} />
        <Description>
          <Birthday>{activeEmployee.birthday}</Birthday>
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
    border-radius: 50%;
  }
`;
// const Image = styled.div`
//   background-image: url("https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png");
//   height: 250px;
//   width: 250px;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   border-radius: 50%;
// `;
const Description = styled.div`
  padding-right: 20px;
`;
const Name = styled.h1`
  text-align: center;
`;
const Birthday = styled.h2``;
const Department = styled.p``;
const Email = styled.p``;
const Phone = styled.p``;
