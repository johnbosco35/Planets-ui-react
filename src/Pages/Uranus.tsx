/** @format */

import React from "react";
import styled from "styled-components";
import Facts from "../Global/Facts";
import Planets from "../Global/Planets";
import uranus from "../Assets/planet-uranus.svg";
import uranus2 from "../Assets/planet-uranus-internal.svg";
import uranus3 from "../Assets/planet-saturn-geology.png";

const Uranus = () => {
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
          image={uranus}
          he="420px"
          p="
Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
          h1="URANUS"
        />
      ) : null}
      {show2 ? (
        <Planets
          he="420px"
          image={uranus2}
          h1="
URANUS"
          p="

The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
        />
      ) : null}
      {show3 ? (
        <>
          <Planets
            he="420px"
            image={uranus}
            h1="
URANUS"
            p="

The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
          />
          <Image src={uranus3} />
        </>
      ) : null}
      <Main>
        <Button style={{ background: show ? " #2fb99e" : "" }} onClick={Show1}>
          OVERVIEW
        </Button>
        <Button style={{ background: show2 ? " #2fb99e" : "" }} onClick={Show2}>
          INTERNAL STRUCTURE
        </Button>
        <Button style={{ background: show3 ? " #2fb99e" : "" }} onClick={Show3}>
          SURFACE GEOLOGY
        </Button>
      </Main>
      <Holder>
        <Facts p="ROTATION TIME" h2="17.2 HOURS" />
        <Facts
          p="REVOLUTION TIME"
          h2="84 YEARS

"
        />
        <Facts p="RADIUS" h2="25,362 KM" />
        <Facts p="AVERAGE TEMP." h2="-195°C" />
      </Holder>
    </div>
  );
};

export default Uranus;

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
