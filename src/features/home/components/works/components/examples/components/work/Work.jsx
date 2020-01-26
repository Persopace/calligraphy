import React from "react";
import styled from "styled-components";

const Work = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const StyledWork = styled(Work)`
  display: flex;
  flex-direction: column;
  justify-content: ${({ bottom }) => (bottom ? "flex-end;" : "flex-start;")};
  ${({ second }) => (second ? "height: 730px" : "")}
`;

export default StyledWork;
