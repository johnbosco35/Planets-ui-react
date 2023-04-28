/** @format */

import React from "react";
import mecury from "../Assets/planet-mercury.svg";
import styled from "styled-components";

interface Iprops {
  image: string;
  h1: string;
  p: string;
  he: string;
}

const Planets: React.FC<Iprops> = ({ image, h1, p, he }) => {
  return (
    <Container he={he}>
      <img src={image} alt="" />
      <TextHold>
        <h1>
          <i>{h1}</i>{" "}
        </h1>
        <p>{p}</p>
      </TextHold>
    </Container>
  );
};

export default Planets;

const Button = styled.div`
  width: 310px;
  height: 45px;
  background-color: skyblue;
  border: 1px solid darkgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const TextHold = styled.div`
  color: white;
  margin-left: 150px;
  margin-bottom: 230px;
  transition: all 350ms ease-in-out;

  h1 {
    text-transform: uppercase;
    font-size: 48px;
    font-weight: 900;
  }

  p {
    width: 400px;
    font-size: 18px;
    color: darkgray;
    line-height: 2rem;
  }
`;

const Container = styled.div<{ he: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  img {
    height: ${({ he }) => he};
    transition: all 350ms ease-in-out;
  }
`;

const Img = styled.div``;
