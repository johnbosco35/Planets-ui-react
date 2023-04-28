/** @format */

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Name>
          <i>Okonkwo Onyedikachi</i>
        </Name>
      </NavLink>
      <NavHolder>
        <NavLink
          to="/mecury"
          style={({ isActive }) => {
            return {
              textDecoration: "none",
              borderTop: isActive ? "3px solid #CDE1E8" : "",
              height: "67px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            };
          }}
        >
          <Navs bt=" #CDE1E8">Mecury</Navs>
        </NavLink>
        <NavLink
          to="/venus"
          style={({ isActive }) => {
            return {
              textDecoration: "none",
              borderTop: isActive ? "3px solid #F7CC7F" : "",
              height: "67px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            };
          }}
        >
          <Navs bt=" #F7CC7F">Venus</Navs>
        </NavLink>
        <NavLink
          to="/earth"
          style={({ isActive }) => {
            return {
              textDecoration: "none",
              borderTop: isActive ? "3px solid #5E73F3" : "",
              height: "67px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            };
          }}
        >
          <Navs bt=" #5E73F3">Earth</Navs>
        </NavLink>
        <NavLink
          to="/mars"
          style={({ isActive }) => {
            return {
              textDecoration: "none",
              borderTop: isActive ? "3px solid #EA623F" : "",
              height: "67px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            };
          }}
        >
          <Navs bt=" #EA623F">Mars</Navs>
        </NavLink>
        <NavLink
          to="/jupiter"
          style={({ isActive }) => {
            return {
              textDecoration: "none",
              borderTop: isActive ? "3px solid #ECAD7A" : "",
              height: "67px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            };
          }}
        >
          <Navs bt=" #ECAD7A">Jupiter</Navs>
        </NavLink>
        <NavLink
          to="/Saturn"
          style={({ isActive }) => {
            return {
              textDecoration: "none",
              borderTop: isActive ? "3px solid #E9BB62" : "",
              height: "67px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            };
          }}
        >
          <Navs bt=" #E9BB62">Saturn</Navs>
        </NavLink>
        <NavLink
          to="/uranus"
          style={({ isActive }) => {
            return {
              textDecoration: "none",
              borderTop: isActive ? "3px solid #5CDDC4" : "",
              height: "67px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            };
          }}
        >
          <Navs bt=" #5CDDC4">Uranus</Navs>
        </NavLink>
        <NavLink
          to="/neptune"
          style={({ isActive }) => {
            return {
              textDecoration: "none",
              borderTop: isActive ? "3px solid #3366DB" : "",
              height: "67px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            };
          }}
        >
          <Navs bt=" #3366DB">Neptune</Navs>
        </NavLink>
      </NavHolder>
    </Container>
  );
};

export default Header;

const Navs = styled.p<{ bt: string }>`
  color: white;
  margin: 15px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: Inria serif;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    border-top: 3px solid ${({ bt }) => bt};
  }
`;

const NavHolder = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
`;

const Name = styled.pre`
  color: white;
  margin-left: 40px;
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
`;

const Container = styled.div`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid darkgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
