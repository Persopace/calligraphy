import React from "react";
import styled from "styled-components";
import { Col, Raw, Description, ConturTitle } from "components";

const Title = styled.div`
  font-weight: 900;
  font-size: 68px;
  line-height: 80px;
`;

const StorckInfo = styled.div`
  margin-top: 58px;
`;

const customStyle = `
  font-size: 104px;
  line-height: 122px;
  margin-left: -8px;
  margin-botom: 23px;
`;

const Storck = ({ className }) => (
  <div className={className}>
    <Raw>
      <Col size={3} offset={2}>
        <Title>STORCK</Title>
      </Col>
    </Raw>
    <StorckInfo>
      <Raw>
        <Col size={3} offset={3}>
          <div>
            <ConturTitle customStyle={customStyle}>10.04</ConturTitle>
            <Description>
              As well as letterterig - the art of composing letters. In
              addition, guests will find a practical task that will help to
              comprehend and fund the material.
            </Description>
          </div>
        </Col>
      </Raw>
    </StorckInfo>
  </div>
);

const StyledStorck = styled(Storck)`
  margin-top: 277px;
`;

export default StyledStorck;
