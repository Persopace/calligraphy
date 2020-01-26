import React from "react";
import { Layout } from "components";
import { MainInfo, Events, Works } from "./components";

const Home = () => {
  return (
    <div style={{ "margin-bottom": "150px" }}>
      <MainInfo />
      <Layout>
        <Events />
        <Works />
      </Layout>
    </div>
  );
};

export default Home;
