import React from "react";

import styled from "styled-components";

import Month from "./Month";

const monthArr = [
  {
    name: "January",
    icon: "https://img.icons8.com/ios/25/undefined/january.png",
    month: 1,
  },
  {
    name: "February",
    icon: "https://img.icons8.com/ios/25/undefined/february.png",
    month: 2,
  },
  {
    name: "March",
    icon: "https://img.icons8.com/ios/25/undefined/march.png",
    month: 3,
  },
  {
    name: "April",
    icon: "https://img.icons8.com/ios/25/undefined/april.png",
    month: 4,
  },
  {
    name: "May",
    icon: "https://img.icons8.com/ios/25/undefined/may.png",
    month: 5,
  },
  {
    name: "June",
    icon: "https://img.icons8.com/ios/25/undefined/june.png",
    month: 6,
  },
  {
    name: "July",
    icon: "https://img.icons8.com/ios/25/undefined/july.png",
    month: 7,
  },
  {
    name: "August",
    icon: "https://img.icons8.com/ios/25/undefined/august.png",

    month: 8,
  },
  {
    name: "September",
    icon: "https://img.icons8.com/ios/25/undefined/september.png",
    month: 9,
  },
  {
    name: "October",
    icon: "https://img.icons8.com/ios/25/undefined/october.png",
    month: 10,
  },
  {
    name: "November",
    icon: "https://img.icons8.com/ios/25/undefined/november.png",
    month: 11,
  },
  {
    name: "December",
    icon: "https://img.icons8.com/ios/25/undefined/december.png",
    month: 12,
  },
];

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
  min-width: 200px;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
