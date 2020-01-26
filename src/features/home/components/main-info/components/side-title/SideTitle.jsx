import React from "react";
import { ConturTitle } from "components";

const customStyle = `
  position: absolute;
  top: 50%;
  transform: rotate(-90deg) translateY(-50%);
  font-family: Open Sans Condensed;
  font-size: 42px;
  line-height: 57px;
  letter-spacing: 0.1em;`;

const SideTitle = () => (
  <ConturTitle customStyle={customStyle}>AMSTERDAM</ConturTitle>
);

export default SideTitle;
