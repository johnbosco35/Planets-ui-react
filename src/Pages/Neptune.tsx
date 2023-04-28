/** @format */

import React from "react";
import styled from "styled-components";
import Facts from "../Global/Facts";
import Planets from "../Global/Planets";
import neptune from "../Assets/planet-neptune.svg";
import neptune2 from "../Assets/planet-neptune-internal.svg";
import neptune3 from "../Assets/planet-neptune-geology.png";

const Neptune = () => {
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
          image={neptune}
          he="420px"
          p="
Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.."
          h1="NEPTUNE"
        />
      ) : null}
      {show2 ? (
        <Planets
          he="420px"
          image={neptune2}
          h1="
NEPTUNE"
          p="

Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
        />
      ) : null}
      {show3 ? (
        <>
          <Planets
            he="420px"
            image={neptune}
            h1="
NEPTUNE"
            p="

Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
          />
          <Image src={neptune3} />
        </>
      ) : null}
      <Main>
        <Button style={{ background: show ? " #3170f0" : "" }} onClick={Show1}>
          OVERVIEW
        </Button>
        <Button style={{ background: show2 ? " #3170f0" : "" }} onClick={Show2}>
          INTERNAL STRUCTURE
        </Button>
        <Button style={{ background: show3 ? " #3170f0" : "" }} onClick={Show3}>
          SURFACE GEOLOGY
        </Button>
      </Main>
      <Holder>
        <Facts p="ROTATION TIME" h2="16.08 HOURS" />
        <Facts
          p="REVOLUTION TIME"
          h2="164.79 YEARS

"
        />
        <Facts p="RADIUS" h2="24,622 KM" />
        <Facts p="AVERAGE TEMP." h2="-201°C" />
      </Holder>
    </div>
  );
};

export default Neptune;

const Image = styled.img`
  position: absolute;
  height: 180px;
  left: 24.2%;
  top: 77%;
`;

const Main = styled.div`
  position: absolute;
  top: 490px;
  right: 20.5%;
`;

const Button = styled.div`
  width: 310px;
  height: 45px;
  color: white;
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
  margin-top: 10px;
`;
