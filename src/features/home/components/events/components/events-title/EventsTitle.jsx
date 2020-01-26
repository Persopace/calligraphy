import React from "react";
import { ConturTitle } from "components";

const customStyle = `
  position: absolute;
  right: -20px;
  top: 163px;
  margin-top: 0;
  margin-bottom: 20px;
  letter-spacing: 0.04em;
  font-size: 300px;
  line-height: 400px;
`;

const EventsTitle = () => (
  <ConturTitle customStyle={customStyle}>EVENTS</ConturTitle>
);

export default EventsTitle;
