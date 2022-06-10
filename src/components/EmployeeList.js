import React from "react";

import styled from "styled-components";

import EmployeeCard from "./EmployeeCard";

function EmployeeList() {
  const data = [
    {
      name: "Jim Jam",
      birthday: "09/20/1999",
      department: "Technology",
      phone: "909-999-9999",
      email: "jim@gmail.com",
      image:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
      name: "Cary Smith",
      birthday: "09/20/1999",
      department: "Technology",
      phone: "909-999-9999",
      email: "jim@gmail.com",
      image:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
      name: "Jim Jam",
      birthday: "09/20/1999",
      department: "Technology",
      phone: "909-999-9999",
      email: "jim@gmail.com",
      image:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
      name: "Cary Smith",
      birthday: "09/20/1999",
      department: "Technology",
      phone: "909-999-9999",
      email: "jim@gmail.com",
      image:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
      name: "Jim Jam",
      birthday: "09/20/1999",
      department: "Technology",
      phone: "909-999-9999",
      email: "jim@gmail.com",
      image:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
      name: "Jim Jam",
      birthday: "09/20/1999",
      department: "Technology",
      phone: "909-999-9999",
      email: "jim@gmail.com",
      image:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
      name: "Jim Jam",
      birthday: "09/20/1999",
      department: "Technology",
      phone: "909-999-9999",
      email: "jim@gmail.com",
      image:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
  ];
  return (
    <Wrapper>
      {data?.map((person) => (
        // <div onClick={() => setSelectedPunk(punk.token_id)}>
        <EmployeeCard
          key={person.phone}
          name={person.name}
          birthday={person.birthday}
          department={person.department}
          phone={person.phone}
          email={person.email}
          image={person.image}
        />
        // </div>
      ))}
    </Wrapper>
  );
}

export default EmployeeList;

const Wrapper = styled.div`
  flex: 0.8;
  background: skyblue;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  overflow: scroll;
  flex-wrap: wrap;
  margin-top: 20px;
  padding-bottom: 20px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
