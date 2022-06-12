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
    <div>
      <Title>{monthName} Birthdays</Title>
      <Main>
        {activeEmployee.image ? (
          <img src={activeEmployee.image} alt={activeEmployee.name} />
        ) : (
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            alt={activeEmployee.name}
          />
        )}
        <Description>
          <Name>{activeEmployee.name}</Name>
          <Birthday>
            {monthName} {activeEmployee.birthday.slice(8, 10)},{" "}
            {activeEmployee.birthday.slice(0, 4)}
          </Birthday>
          <Email>{activeEmployee.email}</Email>
          <Department>
            <span>Department:</span> {activeEmployee.department}
          </Department>
          <Phone>
            <span>phone: </span>
            {activeEmployee.phone}
          </Phone>
        </Description>
      </Main>
    </div>
  );
}

export default EmployeeDescription;

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
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
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
const Birthday = styled.h3`
  margin: 0;
`;
const Department = styled.p`
  margin: 0;
  color: #0b090a;
  font-size: 20px;
  span {
    color: #6c757d;
    font-size: 14px;
  }
`;
const Email = styled.p`
  margin-top: 5px;
  color: #0b090a;
  font-size: 18px;
`;
const Phone = styled.p`
  margin: 0;
  color: #0b090a;
  font-size: 20px;
  span {
    color: #6c757d;
    font-size: 14px;
  }
`;
