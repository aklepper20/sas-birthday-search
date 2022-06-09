import styled from "styled-components";

import MonthList from "./components/MonthList";
import EmployeeDetails from "./components/EmployeeDetails";

function App() {
  return (
    <Wrapper>
      <MonthList />
      <EmployeeDetails />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background: blue;
  height: 100vh;
  width: 100vw;
  display: flex;
  font-family: "Poppins", sans-serif;
`;
