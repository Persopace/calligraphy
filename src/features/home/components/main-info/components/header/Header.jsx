import React from "react";
import styled from "styled-components";
import { NavPanel } from "./components";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <NavPanel />
    </header>
  );
};

const StyledHeader = styled(Header)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHeader;
