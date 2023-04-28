/** @format */

import React from "react";
import Facts from "../Global/Facts";
import Planets from "../Global/Planets";
import jupiter from "../Assets/planet-jupiter.svg";
import styled from "styled-components";
import jupiter2 from "../Assets/planet-jupiter-internal.svg";
import jupiter3 from "../Assets/planet-jupiter-geology.png";

const Jupiter = () => {
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
          image={jupiter}
          he="520px"
          p="

Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun."
          h1="Jupiter"
        />
      ) : null}
      {show2 ? (
        <Planets
          he="520px"
          image={jupiter2}
          h1="
JUPITER"
          p="

When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core."
        />
      ) : null}
      {show3 ? (
        <>
          <Planets
            he="520px"
            image={jupiter}
            h1="
JUPITER"
            p="

The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665."
          />
          <Image src={jupiter3} />
        </>
      ) : null}

      <Main>
        <Button style={{ background: show ? " #d83b36" : "" }} onClick={Show1}>
          OVERVIEW
        </Button>
        <Button style={{ background: show2 ? " #d83b36" : "" }} onClick={Show2}>
          INTERNAL STRUCTURE
        </Button>
        <Button style={{ background: show3 ? " #d83b36" : "" }} onClick={Show3}>
          SURFACE GEOLOGY
        </Button>
      </Main>
      <Holder>
        <Facts p="ROTATION TIME" h2="9.93 HOURS" />
        <Facts
          p="REVOLUTION TIME"
          h2="11.86 YEARS

"
        />
        <Facts p="RADIUS" h2="69,911 KM" />
        <Facts p="AVERAGE TEMP." h2="-108°C" />
      </Holder>
    </div>
  );
};

export default Jupiter;

const Image = styled.img`
  position: absolute;
  height: 180px;
  left: 24.2%;
  top: 87%;
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
  margin-top: 49px;
`;
