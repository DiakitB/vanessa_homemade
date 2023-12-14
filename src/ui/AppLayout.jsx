import { Outlet } from "react-router-dom"
import Header from "./Header";

import styled from "styled-components"
const StyledAppLout = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  height: 100vh;
`;
const Main = styled.main`
  /* background-color: blue; */
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 150rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function AppLayout() {
    return (
        <StyledAppLout className="bg-black-300 px-3 py-4">
          <Header />
         
    
          <Main>
            <Container>
              <Outlet />
            </Container>
          </Main>
        </StyledAppLout>
      );
}
export default AppLayout