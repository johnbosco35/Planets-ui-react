/** @format */

import React from "react";
import Planets from "../Global/Planets";
import styled from "styled-components";
import Facts from "../Global/Facts";
import earth from "../Assets/planet-earth.svg";
import earth2 from "../Assets/planet-earth-internal.svg";
import earth3 from "../Assets/planet-earth-geology.png";

const Earth = () => {
  const [show, setShow] = React.useState<boolean>(true);
  const [show2, setShow2] = React.useState<boolean>(false);
  const [show3, setShow3] = React.useState<boolean>(false);

  const Show1 = () => {
    setShow(true);
    setShow2(false);
    setShow3(false);
  };
  const Show2 = () => {
    setShow(false);
    setShow2(true);
    setShow3(false);
  };
  const Show3 = () => {
    setShow(false);
    setShow2(false);
    setShow3(true);
  };
  return (
    <div>
      {show ? (
        <Planets
          image={earth}
          he="450px"
          p="

Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."
          h1="EARTH"
        />
      ) : null}
      {show2 ? (
        <Planets
          he="450px"
          image={earth2}
          h1="
EARTH"
          p="

The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate."
        />
      ) : null}
      {show3 ? (
        <>
          <Planets
            he="450px"
            image={earth}
            h1="
EARTH"
            p="

The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
          />
          <Image src={earth3} />
        </>
      ) : null}
      <Main>
        <Button style={{ background: show ? "#5669e0" : "" }} onClick={Show1}>
          OVERVIEW
        </Button>
        <Button style={{ background: show2 ? "#5669e0" : "" }} onClick={Show2}>
          INTERNAL STRUCTURE
        </Button>
        <Button style={{ background: show3 ? "#5669e0" : "" }} onClick={Show3}>
          SURFACE GEOLOGY
        </Button>
      </Main>
      <Holder>
        <Facts p="ROTATION TIME" h2="0.99 DAYS" />
        <Facts
          p="REVOLUTION TIME"
          h2="365.26 DAYS

"
        />
        <Facts p="RADIUS" h2="6,371 KM" />
        <Facts p="AVERAGE TEMP." h2="16°C" />
      </Holder>
    </div>
  );
};

export default Earth;

const Image = styled.img`
  position: absolute;
  height: 140px;
  left: 25.5%;
  top: 95%;
`;

const Main = styled.div`
  position: absolute;
  top: 490px;
  right: 19.5%;
`;

const Button = styled.div`
  width: 310px;
  height: 45px;
  border: 1px solid darkgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 350ms ease-in-out;
  color: white;
`;

const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;
