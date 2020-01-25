import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "components";
import Home from "./home";

import "../index.css";

const App = () => {
  return (
    <Router>
      <Layout>
        <Home />
      </Layout>
    </Router>
  );
};

export default App;
