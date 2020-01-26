import styled from "styled-components";

const ConturTitle = styled.div`
  color: transparent;
  font-weight: bold;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffbbc8;
  ${({ customStyle }) => customStyle || ""}
`;

export default ConturTitle;
