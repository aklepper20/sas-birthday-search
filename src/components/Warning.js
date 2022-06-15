import React from "react";

import styled from "styled-components";

function Warning() {
  return (
    <div>
      <WarningBody>Please Enter a Department</WarningBody>
    </div>
  );
}

export default Warning;

const WarningBody = styled.div`
  color: red;
  font-size: 14px;
  margin-left: 10px;
`;
