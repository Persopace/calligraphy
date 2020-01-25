import React from "react";
import styled from "styled-components";
import { Header, MainInfo, Title, SideTitle } from "./components";

const Home = () => {
  return (
    <div>
      <MainInfo>
        <SideTitle />
        <Header />
        <Title />
      </MainInfo>
    </div>
  );
};

export default Home;
