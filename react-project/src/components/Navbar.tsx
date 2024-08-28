import React from 'react';
import {NavBarContainer,NavLinks,StyledLink,Title} from "../StyledComponents/NavBarStyledComponents"
const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <NavLinks>
        <StyledLink to="/all-tasks" className="active">
          All Tasks
        </StyledLink>
        <StyledLink to="/completed-tasks" className="active">
          Completed Tasks
        </StyledLink>
        <StyledLink to="/pending-tasks" className="active">
          Pending Tasks
        </StyledLink>
        <StyledLink to="/deleted-tasks" className="active">
          Deleted Tasks
        </StyledLink>
      </NavLinks>
      <Title>Task Manager</Title>
    </NavBarContainer>
  );
};

export default NavBar;
