/** @format */

import React from "react";
import Planets from "../Global/Planets";
import Facts from "../Global/Facts";
import styled from "styled-components";
import mercury from "../Assets/planet-mercury.svg";
import mecury2 from "../Assets/planet-mercury-internal.svg";
import mecury3 from "../Assets/planet-mercury-geology.png";

const Mercury = () => {
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
    <div style={{ color: "white" }}>
      {show ? (
        <Planets
          image={mercury}
          h1="MERCURY"
          p="

Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.

"
          he="300px"
        />
      ) : null}
      {show2 ? (
        <Planets
          image={mecury2}
          h1="MERCURY"
          p="

Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.

"
          he="300px"
        />
      ) : null}
      {show3 ? (
        <>
          <Planets
            image={mercury}
            h1="MERCURY"
            p="

Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.

"
            he="300px"
          />
          <Image src={mecury3} />
        </>
      ) : null}
      <Main>
        <Button style={{ background: show ? "skyblue" : "" }} onClick={Show1}>
          OVERVIEW
        </Button>
        <Button style={{ background: show2 ? "skyblue" : "" }} onClick={Show2}>
          INTERNAL STRUCTURE
        </Button>
        <Button style={{ background: show3 ? "skyblue" : "" }} onClick={Show3}>
          SURFACE GEOLOGY
        </Button>
      </Main>
      <Holder>
        <Facts p="ROTATION TIME" h2="58.6 DAYS" />
        <Facts p="REVOLUTION TIME" h2="87.97 DAYS" />
        <Facts p="RADIUS" h2="2,439.7 KM" />
        <Facts p="AVERAGE TEMP." h2="430°C" />
      </Holder>
    </div>
  );
};

export default Mercury;

const Image = styled.img`
  position: absolute;
  height: 140px;
  left: 25.5%;
  top: 80%;
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
  cursor: pointer;
  transition: all 350ms ease-in-out;
`;

const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
