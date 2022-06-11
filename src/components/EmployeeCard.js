import React from "react";

import styled from "styled-components";

function EmployeeCard({ name, birthday, image }) {
  return (
    <Wrapper>
      <img src={image} alt={name} />
      <Main>
        <Name> {name.length >= 13 ? name.slice(0, 14) + "..." : name}</Name>
        <SubTitle>{birthday}</SubTitle>
      </Main>
    </Wrapper>
  );
}

export default EmployeeCard;

const Wrapper = styled.div`
  color: white;
  background-color: #6c757d;
  border-radius: 20px;
  width: 230px;
  height: 310px;
  margin: 15px;
  overflow: hidden;
  transform: scale(1);
  transition: 0.5s;
  img {
    width: 100%;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Name = styled.h2`
  margin: 0;
`;
const SubTitle = styled.p`
  margin: 0;
`;
