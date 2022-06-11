import React from "react";

import styled from "styled-components";

import EmployeeCard from "./EmployeeCard";

function EmployeeList({ setSelectedEmployee, filteredEmployees }) {
  return (
    <Wrapper>
      {filteredEmployees?.map((em) => (
        <div
          onClick={() => setSelectedEmployee(filteredEmployees.indexOf(em))}
          key={em.id}
        >
          <EmployeeCard
            key={em.id}
            name={em.name}
            birthday={em.birthday}
            department={em.department}
            phone={em.phone}
            email={em.email}
            image={em.image}
          />
        </div>
      ))}
    </Wrapper>
  );
}

export default EmployeeList;

const Wrapper = styled.div`
  flex: 1;
  border-top: 1px solid lightgrey;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
