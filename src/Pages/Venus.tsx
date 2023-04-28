/** @format */

import React from "react";
import Planets from "../Global/Planets";
import Facts from "../Global/Facts";
import styled from "styled-components";
import venus from "../Assets/planet-venus.svg";
import venus2 from "../Assets/planet-venus-internal.svg";
import venus3 from "../Assets/planet-venus-geology.png";

const Venus = () => {
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
          he="400px"
          image={venus}
          h1="VENUS"
          p="

Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."
        />
      ) : null}
      {show2 ? (
        <Planets
          he="400px"
          image={venus2}
          h1="VENUS"
          p="

Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
        />
      ) : null}
      {show3 ? (
        <>
          <Planets
            he="400px"
            image={venus}
            h1="VENUS"
            p="

The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
          />
          <Image src={venus3} />
        </>
      ) : null}
      <Main>
        <Button style={{ background: show ? "#ffb324" : "" }} onClick={Show1}>
          OVERVIEW
        </Button>
        <Button style={{ background: show2 ? "#ffb324" : "" }} onClick={Show2}>
          INTERNAL STRUCTURE
        </Button>
        <Button style={{ background: show3 ? "#ffb324" : "" }} onClick={Show3}>
          SURFACE GEOLOGY
        </Button>
      </Main>
      <Holder>
        <Facts p="ROTATION TIME" h2="243 DAYS" />
        <Facts p="REVOLUTION TIME" h2="224.7 DAYS" />
        <Facts p="RADIUS" h2="6,051.8 KM" />
        <Facts p="AVERAGE TEMP." h2="471°C" />
      </Holder>
    </div>
  );
};

export default Venus;

const Image = styled.img`
  position: absolute;
  height: 140px;
  left: 25.5%;
  top: 80%;
`;

const Main = styled.div`
  position: absolute;
  top: 490px;
  right: 21%;
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
  transition: all 350ms ease-in-out;
  cursor: pointer;
`;

const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
