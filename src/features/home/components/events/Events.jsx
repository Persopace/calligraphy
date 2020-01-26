import React from "react";
import {
  EventsTitle,
  Cropp,
  Storck,
  CropPromo,
  StorckPromo
} from "./components";
import styled from "styled-components";
import { Grid } from "components";

const Events = ({ className }) => {
  return (
    <section className={className}>
      <EventsTitle />
      <CropPromo />
      <StorckPromo />
      <Grid>
        <Cropp />
        <Storck />
      </Grid>
    </section>
  );
};

const StyledEvents = styled(Events)`
  position: relative;
`;

export default StyledEvents;
