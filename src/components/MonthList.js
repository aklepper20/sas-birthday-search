import React from "react";

import styled from "styled-components";

import Month from "./Month";
import monthArr from "../helpers/monthArr";

function MonthList({ filterStatus, setFilterStatus, monthName, setMonthName }) {
  return (
    <Wrapper>
      {monthArr.map((month) => (
        <div key={month.name}>
          <Month
            setMonthName={setMonthName}
            monthName={monthName}
            name={month.name}
            icon={month.icon}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            number={month.month}
          />
        </div>
      ))}
    </Wrapper>
  );
}

export default MonthList;

const Wrapper = styled.div`
  border-right: 1px solid lightgrey;
  flex: 0.3;
  min-width: 230px;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
