/** @format */

import React from "react";

import planets from "../Assets/pla.gif";

const Home = () => {
  return (
    <div
      style={{
        height: "86.2vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${planets})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Home;
