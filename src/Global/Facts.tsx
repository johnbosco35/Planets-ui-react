/** @format */

import React from "react";
import styled from "styled-components";

interface Iprops {
  p: string;
  h2: string;
}

const Facts: React.FC<Iprops> = ({ p, h2 }) => {
  return (
    <Container>
      <p>{p}</p>
      <h2>
        <i>{h2}</i>
      </h2>
    </Container>
  );
};

export default Facts;

const Container = styled.div`
  width: 250px;
  height: 120px;
  border: 1px solid silver;
  padding-left: 20px;
  margin-right: 30px;

  p {
    color: silver;
    /* margin: 0; */
    margin-bottom: 10px;
  }

  h2 {
    color: white;
    font-size: 37px;
    margin: 0;
    text-transform: uppercase;
  }
`;
