import React from "react";
import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";

import Nav from "../../Components/Nav";
import orderImg from "./menuIcon/edit.png";
import accountImg from "./menuIcon/settings.png";
import deleteUserImg from "./menuIcon/deleteUser.png";
import Account from "./Account";

const demoUser = {
  "name" : "홍길동",
  "email": "hgd@gmail.com",
  "password":"1234",
}

const User = () => {
  return (
    <div>
      <Nav linkList={['logout']}></Nav>
      <div>
        <Routes>
          <Route path="" element={<Menu />} />
          <Route path="order" element={<Menu />} />
          <Route path="account" element={<Account userName={demoUser.name} userEmail={demoUser.email}/>} />
          <Route path="delete" element={<Menu />} />
        </Routes>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div>
      <UserMenuList>
        <UserMenu to="/user/order">
          <img src={orderImg} alt="orderImg" />
          주문조회
        </UserMenu>
        <UserMenu to="/user/account">
          <img src={accountImg} alt="accountImg" />
          회원정보 관리
        </UserMenu>
        <UserMenu to="/user/delete">
          <img src={deleteUserImg} alt="deleteUserImg" />
          회원 탈퇴
        </UserMenu>
      </UserMenuList>
    </div>
  );
          
};

const UserMenuList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const UserMenu = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  margin: 50px;
  opacity: 0.7;
  font-weight: 700;
  text-decoration: none;
  color: black;
  img {
    width: 150px;
    margin-bottom: 30px;
  }
  :hover {
    opacity: 1;
  }
`;

export default User;
