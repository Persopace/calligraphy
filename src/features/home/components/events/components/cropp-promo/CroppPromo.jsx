import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cropp from "assets/images/cropp.png";

const Promo = styled.div`
  height: 646px;
  width: 420px;
  background-image: url(${cropp});
`;

const CroppPromo = ({ className }) => (
  <div className={className}>
    <Link to="/events">
      <Promo />
    </Link>
  </div>
);

const StyledCroppPromo = styled(CroppPromo)`
  position: absolute;
  top: 506px;
  right: 0;
  z-index: -1;
`;

export default StyledCroppPromo;
