import React from "react";
import styled from "styled-components";
import { Raw, Col } from "components";

const WorksSubtitle = ({ className }) => (
  <Raw>
    <Col size={7}>
      <div className={className}>NEW WORKS</div>
    </Col>
  </Raw>
);

const StyledWorkSubtitle = styled(WorksSubtitle)`
  margin-top: 530px;
  font-weight: 900;
  font-size: 104px;
  line-height: 122px;
  letter-spacing: 0.05em;
  color: #ffbbc8;
`;

export default StyledWorkSubtitle;
