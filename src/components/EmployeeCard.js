import React from "react";

import styled from "styled-components";

function EmployeeCard({ name, birthday, department, phone, email, image }) {
  return (
    <Wrapper>
      <img src={image} alt={name} />
    </Wrapper>
  );
}

export default EmployeeCard;

const Wrapper = styled.div`
  color: white;
  background-color: orange;
  border-radius: 20px;
  width: 200px;
  height: 300px;
  margin: 15px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
