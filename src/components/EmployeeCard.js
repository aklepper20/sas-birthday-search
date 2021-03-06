import React from "react";

import styled from "styled-components";
import handleDelete from "../helpers/handleDelete";

function EmployeeCard({
  name,
  birthday,
  image,
  filteredEmployees,
  id,
  setFilteredEmployees,
}) {
  return (
    <Wrapper>
      {image ? (
        <img src={image} alt={name} />
      ) : (
        <img
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          alt={name}
        />
      )}
      <Main>
        <Name> {name.length >= 13 ? name.slice(0, 14) + "..." : name}</Name>

        <SubTitle>{birthday}</SubTitle>
        <Delete
          onClick={() =>
            handleDelete(id, filteredEmployees, setFilteredEmployees)
          }
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/undefined/filled-trash.png"
            alt={`Delete ${name}`}
          />
        </Delete>
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
  height: 330px;
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

const Delete = styled.div`
  width: 25px;
  align-self: end;
  padding-right: 5px;
`;
