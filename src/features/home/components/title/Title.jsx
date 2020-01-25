import React from "react";
import styled from "styled-components";

const Title = ({ className }) => (
  <div className={className}>
    <div>OF</div>
    <h1>CALLIGRAPHY</h1>
  </div>
);

const StyledTitle = styled(Title)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Open Sans Condensed;
  letter-spacing: 0.04em;
  text-align: center;
  font-size: 80px;
  font-weight: bold;

  & h1 {
    margin: 0;
    font-size: 144px;
    line-height: 1em;
  }
`;

export default StyledTitle;
