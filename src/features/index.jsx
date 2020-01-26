import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "components";
import Home from "./home";
import "../index.css";

const App = () => {
  return (
    <Router>
      <Home />
      <Footer />
    </Router>
  );
};

export default App;
