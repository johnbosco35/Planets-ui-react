/** @format */

import React from "react";
import Planets from "../Global/Planets";
import styled from "styled-components";
import mars from "../Assets/planet-mars.svg";
import Facts from "../Global/Facts";
import mars2 from "../Assets/planet-mars-internal.svg";
import mars3 from "../Assets/planet-mars-geology.png";

const Mars = () => {
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
          image={mars}
          he="290px"
          p="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet"
          h1="MARS"
        />
      ) : null}
      {show2 ? (
        <Planets
          he="290px"
          image={mars2}
          h1="
MARS"
          p="

Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
        />
      ) : null}
      {show3 ? (
        <>
          <Planets
            he="290px"
            image={mars}
            h1="
MARS"
            p="

Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
          />
          <Image src={mars3} />
        </>
      ) : null}

      <Main>
        <Button style={{ background: show ? " #fe6a45" : "" }} onClick={Show1}>
          OVERVIEW
        </Button>
        <Button style={{ background: show2 ? " #fe6a45" : "" }} onClick={Show2}>
          INTERNAL STRUCTURE
        </Button>
        <Button style={{ background: show3 ? " #fe6a45" : "" }} onClick={Show3}>
          SURFACE GEOLOGY
        </Button>
      </Main>
      <Holder>
        <Facts p="ROTATION TIME" h2="1.03 DAYS" />
        <Facts
          p="REVOLUTION TIME"
          h2="1.88 YEARS

"
        />
        <Facts p="RADIUS" h2="3,389.5 KM" />
        <Facts p="AVERAGE TEMP." h2="-28°C" />
      </Holder>
    </div>
  );
};

export default Mars;

const Image = styled.img`
  position: absolute;
  height: 140px;
  left: 25.5%;
  top: 85%;
`;

const Main = styled.div`
  position: absolute;
  top: 490px;
  right: 25%;
`;

const Button = styled.div`
  width: 310px;
  height: 45px;
  border: 1px solid darkgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: white;
  cursor: pointer;
  transition: all 350ms ease-in-out;
`;

const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
