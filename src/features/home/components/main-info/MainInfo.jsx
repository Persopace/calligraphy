import React from "react";
import styled from "styled-components";
import mainBackground from "assets/backgrounds/main.png";

const MainInfo = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};

const StyledMainInfo = styled(MainInfo)`
  background-image: url(${mainBackground});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export default StyledMainInfo;
