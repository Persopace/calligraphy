import styled from "styled-components";

const Col = styled.div`
  box-sizing: border-box;
  margin: 0 15px;
  width: calc(100% / 12 * ${({ size }) => size || 1} - 30px);
  margin-left: ${({ offset }) =>
    offset ? `calc(100% / 12 * ${offset} + 15px)` : "15px;"};
`;

export default Col;
