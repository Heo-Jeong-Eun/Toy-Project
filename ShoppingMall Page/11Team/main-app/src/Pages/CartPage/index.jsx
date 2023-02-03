import React, { useContext } from "react";
import Nav from "../../Components/Nav";
import { GlobalContext } from "../../Context/Context";
import styled from "styled-components";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const Cart = () => {

  const {
    addToCart,
    removeAllItem,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    cart,
  } = useContext(GlobalContext);

  const addClick = () => {
    const demoItem = {
      id: Date.now(),
      name: "product.name",
      price: +30000,
      quantity: 1,
    };
    addToCart(demoItem);
  };

  return (
    <div>
      <Nav linkList={["signup", "login"]} />
      <CartItem cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem} removeAllItem={removeAllItem}/>
      <CartTotal cart={cart}></CartTotal>
      <button onClick={addClick}>add</button>
    </div>
  );
};

export default Cart;
