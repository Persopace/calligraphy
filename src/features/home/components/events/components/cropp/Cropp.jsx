import React from "react";
import styled from "styled-components";
import { Description, ConturTitle, Raw, Col } from "components";

const EventDate = styled.div`
  font-size: 104px;
  font-weight: 900;
  color: #ffbbc8;
`;
const customStyle = `
  font-size: 80px;
  line-height: 94px;
`;

const Container = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Cropp = ({ className }) => (
  <Raw>
    <Col size={3} offset={6}>
      <div className={className}>
        <Container>
          <EventDate>22.03</EventDate>
          <Description>
            I would like to know how writing developed, to understand the
            variety of calligraphic styles...
          </Description>
          <ConturTitle customStyle={customStyle}>CROPP</ConturTitle>
        </Container>
      </div>
    </Col>
  </Raw>
);

const StyledCropp = styled(Cropp)`
  margin-top: 409px;
`;

export default StyledCropp;
