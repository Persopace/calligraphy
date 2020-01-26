import React from "react";
import styled from "styled-components";
import { ConturTitle } from "components";

const customStyle = `
  font-weight: 900;
  font-size: 400px;
  line-height: 400px;

  &:last-child {
    margin-left:20px;
  }
`;

const EventsTitle = ({ className }) => (
  <div className={className}>
    <ConturTitle customStyle={customStyle}>NEW</ConturTitle>
    <ConturTitle customStyle={customStyle}>WORKS</ConturTitle>
  </div>
);

const StyledEventsTitle = styled(EventsTitle)`
  position: absolute;
  top: 0;
  transform: rotate(90deg) translate(390px, -280px);
  right: 0;
  z-index: -1;
`;

export default StyledEventsTitle;
