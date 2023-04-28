/** @format */

import React from "react";
import Facts from "../Global/Facts";
import Planets from "../Global/Planets";
import styled from "styled-components";
import saturn from "../Assets/planet-saturn.svg";
import saturn2 from "../Assets/planet-saturn-internal.svg";
import saturn3 from "../Assets/planet-saturn-geology.png";
const Saturn = () => {
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
          image={saturn}
          he="520px"
          p="
Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth."
          h1="SATURN"
        />
      ) : null}
      {show2 ? (
        <Planets
          he="520px"
          image={saturn2}
          h1="
SATURN"
          p="

Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass."
        />
      ) : null}
      {show3 ? (
        <>
          <Planets
            he="520px"
            image={saturn}
            h1="
SATURN"
            p="

The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust."
          />
          <Image src={saturn3} />
        </>
      ) : null}
      <Main>
        <Button style={{ background: show ? " #ca5235" : "" }} onClick={Show1}>
          OVERVIEW
        </Button>
        <Button style={{ background: show2 ? " #ca5235" : "" }} onClick={Show2}>
          INTERNAL STRUCTURE
        </Button>
        <Button style={{ background: show3 ? " #ca5235" : "" }} onClick={Show3}>
          SURFACE GEOLOGY
        </Button>
      </Main>
      <Holder>
        <Facts p="ROTATION TIME" h2="10.8 HOURS" />
        <Facts
          p="REVOLUTION TIME"
          h2="29.46 YEARS

"
        />
        <Facts p="RADIUS" h2="58,232 KM" />
        <Facts p="AVERAGE TEMP." h2="-138°C" />
      </Holder>
    </div>
  );
};

export default Saturn;

const Image = styled.img`
  position: absolute;
  height: 180px;
  left: 24.2%;
  top: 85%;
`;

const Main = styled.div`
  position: absolute;
  top: 490px;
  right: 17%;
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
