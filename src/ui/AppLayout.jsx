import { Outlet } from "react-router-dom"


import styled from "styled-components"
import Header from "./Header";
const StyledAppLout = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  gap: 10px;
  height: 100vh;

`;
const Main = styled.main`
 
  padding: 4rem 4.8rem 6.4rem;
  /* overflow: scroll; */
`;

const Container = styled.div`
  max-width: 180rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function AppLayout() {
    return (
        <StyledAppLout className="bg-black-300 px-3 py-4">
          
         
    <Header/>
          <Main>
            <Container>
              <Outlet />
            </Container>
          </Main>
        </StyledAppLout>
      );
}
export default AppLayout