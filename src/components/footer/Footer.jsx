import React from "react";
import styled from "styled-components";

const Footer = ({ className }) => <footer className={className}></footer>;

const StyledFooter = styled(Footer)`
  height: 328px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export default StyledFooter;
