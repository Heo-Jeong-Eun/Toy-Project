import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImg from "./logo_sample.jpg";
import { GlobalContext } from "../Context/Context";
import { useContext } from "react";

const menuList = {
  login: "LOG IN",
  signup: "SIGN UP",
  cart: "CART",
  logout: "LOG OUT",
  user: "계정관리",
  admin: "페이지관리",
};

const isLogin = false;
const isAdmin = false;

// const isLogin = sessionStorage.getItem("token") ? true : false;
// const isAdmin = sessionStorage.getItem("admin") ? true : false;

const Nav = ({ linkList }) => {

  const {cart} = useContext(GlobalContext);

  return (
    <NavBar>
      <LogoBox>
        <Link to="/">
          <img src={logoImg} alt="logoImg" />
        </Link>
      </LogoBox>
      <LinkBox>
        {linkList.map((to) => (
          <Link to={`../${to}`}>{menuList[to]}</Link>
        ))}
        <Link to="../cart">{`CART(${cart.length})`}</Link>
      </LinkBox>
    </NavBar>
  );
};

const NavBar = styled.div`
  display: flex;
  padding: 10px;
  background-color: #131d47;
  height: 50px;
  justify-content: space-between;
`;
const LogoBox = styled.div`
  img {
    height: 50px;
  }
`;
const LinkBox = styled.div`
  display: flex;
  float: right;
  padding-top: 25px;
  padding-right: 50px;
  a {
    padding-left: 90px;
    text-decoration: none;
    color: #f1f1f1;
    font-weight: 400;
    font-size: 13px;
    letter-spacing: 3px;
    transition: letter-spacing 0.5s;
    &:hover {
      letter-spacing: 3.5px;
    }
  }
`;

export default Nav;
