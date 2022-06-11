import React from "react";

import styled from "styled-components";

function Month({ name, icon, active, setFilterStatus, number, setMonthName }) {
  const handleStatus = (number) => {
    setMonthName(name);
    setFilterStatus(number);
  };

  return (
    <Wrapper>
      <Main onClick={() => handleStatus(number)}>
        <Image background={icon} backgroundActive={active}></Image>
        <Title>{name}</Title>
      </Main>
    </Wrapper>
  );
}

export default Month;

const Wrapper = styled.div``;
const Main = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 15px;

  &:hover {
    background-color: lightyellow;
    border-radius: 30px;
    color: grey;
    transition: color 100ms ease-out;
  }
`;
const Title = styled.div`
  font-size: 20px;
  margin-left: 10px;
`;
const Image = styled.div`
  background-image: ${(props) => `url("${props.background}")`};
  height: 20px;
  width: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${Wrapper}:hover & {
    background-image: ${(props) => `url("${props.backgroundActive}")`};
    transition: color 100ms ease-out;
  }
`;
