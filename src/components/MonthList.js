import React from "react";

import styled from "styled-components";

import Month from "./Month";

const monthArr = [
  {
    name: "January",
    icon: "https://img.icons8.com/ios/25/undefined/january.png",
    active: "https://img.icons8.com/ios-filled/50/undefined/january.png",
  },
  {
    name: "February",
    icon: "https://img.icons8.com/ios/25/undefined/february.png",
    active: "https://img.icons8.com/ios-filled/50/undefined/february.png",
  },
  {
    name: "March",
    icon: "https://img.icons8.com/ios/25/undefined/march.png",
    active: "https://img.icons8.com/ios-filled/50/undefined/march.png",
  },
  {
    name: "April",
    icon: "https://img.icons8.com/ios/25/undefined/april.png",
    active: "https://img.icons8.com/ios-filled/50/undefined/april.png",
  },
  {
    name: "May",
    icon: "https://img.icons8.com/ios/25/undefined/may.png",
    active: "https://img.icons8.com/ios-filled/50/undefined/may.png",
  },
  {
    name: "June",
    icon: "https://img.icons8.com/ios/25/undefined/june.png",
    active: "https://img.icons8.com/ios-filled/50/undefined/june.png",
  },
  {
    name: "July",
    icon: "https://img.icons8.com/ios/25/undefined/july.png",
    active: "https://img.icons8.com/ios-filled/50/undefined/july.png",
  },
  {
    name: "August",
    icon: "https://img.icons8.com/ios/25/undefined/august.png",
    active: "https://img.icons8.com/ios-filled/50/undefined/august.png",
  },
  {
    name: "September",
    icon: "https://img.icons8.com/ios/25/undefined/september.png",
    active: "https://img.icons8.com/ios-filled/50/undefined/september.png",
  },
  {
    name: "October",
    icon: "https://img.icons8.com/ios/25/undefined/october.png",
    active: "https://img.icons8.com/ios-filled/50/undefined/october.png",
  },
  {
    name: "November",
    icon: "https://img.icons8.com/ios/25/undefined/november.png",
    active: "https://img.icons8.com/ios-filled/50/undefined/november.png",
  },
  {
    name: "December",
    icon: "https://img.icons8.com/ios/25/undefined/december.png",
    active: "https://img.icons8.com/ios-filled/50/undefined/december.png",
  },
];

function MonthList() {
  return (
    <Wrapper>
      {monthArr.map((month) => (
        <Month name={month.name} icon={month.icon} active={month.active} />
      ))}
    </Wrapper>
  );
}

export default MonthList;

const Wrapper = styled.div`
  background: yellow;
  flex: 0.3;
  min-width: 200px;
  padding-left: 20px;
  padding-right: 20px;
`;
