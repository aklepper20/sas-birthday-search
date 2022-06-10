import React from "react";

import styled from "styled-components";

function EmployeeCard({ name, birthday, image }) {
  return (
    <Wrapper>
      <img src={image} alt={name} />
      <Main>
        <Name>{name}</Name>
        <SubTitle>{birthday}</SubTitle>
      </Main>
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Name = styled.h2`
  margin-bottom: 0;
`;
const SubTitle = styled.p`
  margin: 0;
`;
