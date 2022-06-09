import React from "react";

import styled from "styled-components";

function Month({ name, icon }) {
  return (
    <Wrapper>
      <Main>
        <Image src={icon} alt={`Calender symbol for ${name}`}></Image>
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
  cursor: pointer;
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
const Image = styled.img``;
