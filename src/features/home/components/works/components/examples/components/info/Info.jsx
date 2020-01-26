import React from "react";
import styled from "styled-components";
import { Description } from "components";

const Author = styled.div`
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: #ffbbc8;
`;

const Info = ({ className, author, title, info }) => (
  <div className={className}>
    <Author>{author}</Author>
    <Description>{title}</Description>
    <Description>{info}</Description>
  </div>
);

const StyledInfo = styled(Info)`
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-top: 36px;
  }

  &:first-child {
    margin-bottom: 18px;
  }
`;

export default StyledInfo;
