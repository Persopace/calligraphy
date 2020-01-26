import React from "react";
import styled from "styled-components";

const Preview = ({ className, src, alt }) => (
  <img src={src} alt={alt} className={className} />
);

const StyledPreview = styled(Preview)`
  height: 406px;
  width: 166px;
`;

export default StyledPreview;
