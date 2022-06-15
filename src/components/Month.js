import React, { useState, useEffect } from "react";

import styled from "styled-components";

function Month({
  name,
  icon,
  setFilterStatus,
  number,
  setMonthName,
  monthName,
}) {
  const [color, setColor] = useState("");
  const [weight, setWeight] = useState("");
  const [fontSize, setFontSize] = useState("");

  const handleStatus = (number) => {
    setMonthName(name);
    setFilterStatus(number);
  };

  useEffect(() => {
    if (monthName === name) {
      setColor("#0b090a");
      setWeight("900");
      setFontSize("30px");
    }
  }, []);

  return (
    <Wrapper>
      <Main onClick={() => handleStatus(number)}>
        <Image background={icon} alt={`${monthName} Calender`}></Image>
        <Title style={{ color, fontWeight: weight, fontSize }}>{name}</Title>
        {monthName === name ? (
          <img
            style={{ height: "26px", marginLeft: "12px" }}
            src="https://img.icons8.com/ios-filled/50/undefined/pin3.png"
            alt="Pinned Month"
          />
        ) : (
          <span></span>
        )}
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
    background-color: #edf2fb;
    border-radius: 30px;
    color: black;
    width: fit-content;
    transition: color 100ms ease-out;
  }
  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;
const Title = styled.h1`
  font-size: 20px;
  margin-left: 10px;
  color: #495057;
`;
const Image = styled.div`
  background-image: ${(props) => `url("${props.background}")`};
  height: 20px;
  width: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${Wrapper}:hover & {
    background-image: url("https://img.icons8.com/ios-filled/50/undefined/planner.png");
    transition: color 100ms ease-out;
    @media (max-width: 768px) {
      background-image: none;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    background-image: none;
  }
`;
