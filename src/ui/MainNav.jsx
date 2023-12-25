import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import Logo from './Logo';

const StyleLink = styled(NavLink)`
    background-color: blue;
`;

// const NavList = styled.ul`
//   display: flex;
  
//   align-items: start;
//   justify-content: start;
//   flex-direction:column;
  
// `;

const StyledLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <ul className='flex flex-col items-center gap-2 md:flex-row items-center'>
        <li className='inline-block text-sm bg-blue-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300
         focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2
          disabled:cursor-not-allowed  px-12 py-2 md:px-5 md:py-2.5 text-xs'>
          <StyledLink to="/recipes">
            Recipes
          </StyledLink>
        </li>
        <li   className='inline-block text-sm bg-blue-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300
         focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2
          disabled:cursor-not-allowed  px-9 py-2 md:px-5 md:py-2.5 text-xs'>
          <StyledLink to="/bookmark">
          
           BookMark
          </StyledLink>
        </li>
        <li  className='inline-block text-sm bg-blue-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300
         focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2
          disabled:cursor-not-allowed  px-9 py-2 md:px-5 md:py-2.5 text-xs'> 
          <StyledLink to="/form">
            Add  Recipe
          </StyledLink>
        </li>

        
      </ul>
    </nav>
  );
}
export default MainNav;