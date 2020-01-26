import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import storck from "assets/promos/storck.png";

const Promo = styled.div`
  height: 646px;
  width: 411px;
  background-image: url(${storck});
`;

const StorckPromo = ({ className }) => (
  <div className={className}>
    <Link to="/events">
      <Promo />
    </Link>
  </div>
);

const StyledStorckPromo = styled(StorckPromo)`
  position: absolute;
  top: 675px;
  left: 0;
  z-index: -1;
`;

export default StyledStorckPromo;
