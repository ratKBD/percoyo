import React from "react";
import Home from "./component/Home";
import "../src/component/app.css";

const App = () => {
  return (
    <>
      <div className="header">
        <img src="./logo.jpeg" className="logo" alt=""></img>
      </div>
      <div className="app">
        <Home />
      </div>
    </>
  );
};

export default App;
