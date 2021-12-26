import styled from "@emotion/styled";
import AppName from "../app-name/app-name";
import Navbar from "../navbar/navbar";

const AppBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  padding: 2rem 0;

  @media (min-width: 640px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

function Appbar() {
  return (
    <AppBar>
      <AppName />
      <Navbar />
    </AppBar>
  );
}

export default Appbar;
