
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
    <div className=''>
     <MainNav/>
    </div>
  );
}

export default Header;