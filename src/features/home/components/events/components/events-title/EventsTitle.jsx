import React from "react";
import styled from "styled-components";

const EventsTitle = ({ className }) => <h2 className={className}>EVENTS</h2>;

const StyledEventsTitle = styled(EventsTitle)`
  position: absolute;
  right: -20px;
  top: 163px;
  margin-top: 0;
  margin-bottom: 20px;
  color: transparent;
  letter-spacing: 0.04em;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffbbc8;
  font-size: 300px;
  line-height: 400px;
`;

export default StyledEventsTitle;
