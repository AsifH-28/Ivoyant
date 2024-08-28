import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  background-color: #3498db;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;

  &.active {
    background-color: #2980b9;
  }

  &:hover {
    background-color: #2980b9;
  }
`;

export const Title = styled.div`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
`;
