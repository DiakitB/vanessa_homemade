
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import MainNav from './MainNav';







// const StyledHeader = styled.header`
//   background-color: purple;
//   padding: 1.2rem 4.8rem;
//   border-bottom: 1px solid gray;
//`;

function Header() {
  return (
    <header className=' relative shadow-lg  bg-pink-300 '>
     <MainNav/>
    </header>
  );
}

export default Header;