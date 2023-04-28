/** @format */

import React from "react";
import Header from "../blocks/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
const HomeLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default HomeLayout;

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  background-color: #070f2b;
`;
