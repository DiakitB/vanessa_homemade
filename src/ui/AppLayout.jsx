import { Outlet } from "react-router-dom"


import styled from "styled-components"
import Header from "./Header";
// const StyledAppLout = styled.div`
//   display: grid;
//   grid-template-rows: 100px 1fr;
//   gap: 10px;
//   height: 100vh;
// overflow: auto;
// overflow-x:hidden;
// `;
const DiveBox = styled.div`
display: grid;
height: 800px;
grid-template-rows: 1fr 15fr;
gap: 20px
`
const Main = styled.main`
 width:100vw;
  padding: auto;
  overflow: scroll;
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
        <DiveBox className="bg-black-300 px-3 py-4">
          
         
    <Header/>
          <Main>
            <Container>
              <Outlet />
            </Container>
          </Main>
        </DiveBox>
      );
}
export default AppLayout