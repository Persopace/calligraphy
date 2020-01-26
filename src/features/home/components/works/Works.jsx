import React from "react";
import { WorksTitle, WorksSubtitle, Examples } from "./components";
import styled from "styled-components";
import { Grid } from "components";

const Works = ({ className }) => {
  return (
    <section className={className}>
      <WorksTitle />
      <Grid>
        <WorksSubtitle />
        <Examples />
      </Grid>
    </section>
  );
};

const StyledWorks = styled(Works)`
  position: relative;
`;

export default StyledWorks;
