import React from "react";
import { Layout } from "components";
import { MainInfo, Events } from "./components";

const Home = () => {
  return (
    <div>
      <MainInfo />
      <Layout>
        <Events />
      </Layout>
    </div>
  );
};

export default Home;
