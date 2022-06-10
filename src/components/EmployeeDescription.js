import React from "react";

import styled from "styled-components";

function EmployeeDescription() {
  return (
    <Wrapper>
      <Name>Jim Jam</Name>
      <Main>
        <Image></Image>
        <Description>
          <Birthday>June 12th 2000</Birthday>
          <Department>Technology</Department>
          <Email>jim@gmail.com</Email>
          <Phone>(909) 999-9999</Phone>
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
`;
const Image = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png");
  height: 250px;
  width: 250px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
`;
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
