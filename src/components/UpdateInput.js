import React, { useState } from "react";

import styled from "styled-components";

import handleUpdate from "../helpers/handleUpdate";
import Warning from "./Warning";

function UpdateInput({ filteredEmployees, setUpdateInput, activeEmployee }) {
  const [inputs, setInputs] = useState("");
  const [openWarning, setOpenWarning] = useState(false);

  const update = (id, inputs, filteredEmployees) => {
    if (inputs === "") {
      setOpenWarning(true);
      return;
    }
    handleUpdate(id, inputs, filteredEmployees);
    setUpdateInput(false);
  };
  return (
    <>
      {openWarning && <Warning />}
      <Wrapper>
        <Input
          value={inputs}
          onChange={(e) => setInputs(e.target.value)}
          placeholder={activeEmployee.department}
        ></Input>
        <img
          onClick={() => update(activeEmployee.id, inputs, filteredEmployees)}
          style={{
            height: "25px",
            width: "25px",
            paddingLeft: "5px",
            cursor: "pointer",
            fontSize: "22px",
            fontWeight: 500,
            color: "#0b090a",
          }}
          src="https://img.icons8.com/ios-glyphs/30/undefined/save--v1.png"
          alt="Save Updated Department"
        />
      </Wrapper>
    </>
  );
}

export default UpdateInput;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  border: none;
  outline: none;
  height: 30px;
  width: 100%;
  border-radius: 20px;
  padding-left: 15px;
`;
