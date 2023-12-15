import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import Logo from './Logo';

const StyleLink = styled(NavLink)`
    background-color: blue;
`;

const NavList = styled.ul`
  display: flex;
  gap: 0.4rem;
  align-items: start;
  justify-content: start;
  
`;

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
      <NavList>
        <li>
          <StyledLink to="/recipes">
            Recipes
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/bookmark">
          
           BookMark
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/form">
            Add  Recipe
          </StyledLink>
        </li>

        
      </NavList>
    </nav>
  );
}
export default MainNav;