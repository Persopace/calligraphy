import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 400;
  display: flex;
  justify-content: center;
  width: 80px;

  &:hover {
    color: #ffbbc8;
    font-weight: 700;
  }
`;

const NavPanel = ({ className }) => (
  <nav className={className}>
    <StyledLink>About us</StyledLink>
    <StyledLink>Visit</StyledLink>
    <StyledLink>Events</StyledLink>
    <StyledLink>Contacts</StyledLink>
  </nav>
);

const StyledNavPanel = styled(NavPanel)`
  width: 560px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default StyledNavPanel;
