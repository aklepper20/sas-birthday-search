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
  display: flex;
`;
const Title = styled.div``;
const Image = styled.img``;
