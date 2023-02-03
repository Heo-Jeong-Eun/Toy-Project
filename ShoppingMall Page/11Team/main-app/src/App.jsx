import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/MainPage";
import Login from "./Pages/LoginPage";
import Signup from "./Pages/SignupPage";
import Cart from "./Pages/CartPage";
import User from "./Pages/UserPage";
import Footer from "./Components/Footer";
import Order from "./Pages/OrderPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user/*" element={<User />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
