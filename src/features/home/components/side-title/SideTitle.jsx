import React from "react";
import styled from "styled-components";

const SideTitle = ({ className }) => <div className={className}>AMSTERDAM</div>;

const StyledSideTitle = styled(SideTitle)`
  position: absolute;
  top: 50%;
  transform: rotate(-90deg) translateY(-50%);
  font-family: Open Sans Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 57px;
  letter-spacing: 0.1em;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffbbc8;
`;

export default StyledSideTitle;
