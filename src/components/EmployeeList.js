import React from "react";

import styled from "styled-components";

import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees, setSelectedEmployee }) {
  return (
    <Wrapper>
      {employees?.map((em) => (
        <div onClick={() => setSelectedEmployee(em.id)} key={em.id}>
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
  background: skyblue;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  overflow: scroll;
  flex-wrap: wrap;
  margin-top: 20px;
  padding-bottom: 20px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
