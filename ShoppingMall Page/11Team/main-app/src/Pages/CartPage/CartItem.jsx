import React from "react";
import styled from "styled-components";

const CartItem = ({
  cart,
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  removeAllItem,
}) => {
  console.log(cart);

  return (
    <CartItemList>
      <span>CART</span>
      <ItemDeleteAll onClick={removeAllItem}>전체 삭제</ItemDeleteAll>
      {cart &&
        cart.map((item) => (
          <StyledCartItem key={item.id}>
            <ItemImg>상품이미지</ItemImg>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price.toLocaleString()}&#8361;</ItemPrice>
            <ItemQuantity>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <div>{item.quantity}</div>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </ItemQuantity>
            <ItemTotalPrice>
              {(item.price * item.quantity).toLocaleString()}&#8361;
            </ItemTotalPrice>
            <ItemDelete onClick={() => removeItem(item.id)}> ❌ </ItemDelete>
          </StyledCartItem>
        ))}
    </CartItemList>
  );
};

const CartItemList = styled.div`
  padding: 40px;
  span {
    color: #131d47;
    font-weight: 400;
    font-size: 40px;
    letter-spacing: 3px;
    margin-left: 20px;
  }
`;

const StyledCartItem = styled.div`
  display: flex;
  position: relative;
  margin-left: 20px;
  margin-top: 20px;
  align-items: center;
  background-color: #f1f1f1ab;
  width: 63%;
`;

const ItemImg = styled.div`
  background-color: #131d47;
  color: orange;
  margin: 5px;
  width: 200px;
  height: 200px;
`;

const ItemName = styled.div`
  position: absolute;
  top: 50px;
  left: 250px;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 1px;
`;


const ItemPrice = styled.div`
  position: absolute;
  left: 250px;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
`;

const ItemQuantity = styled.div`
  position: absolute;
  right: 200px;
  display: flex;
  background-color: #f1f1f1;
  margin: 0px;
  border: 1px solid;
  align-items: center;
  button{
    border: 0px;
    cursor: pointer;
    font-size: 20px;
  }
  div{
    width: 50px;
    font-size: 15px;
    text-align: center;
  }
`;

const ItemTotalPrice = styled.div`
  position: absolute;
  right: 75px;
  font-size: 20px;
  letter-spacing: 1px;
`;

const ItemDelete = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: 0px; 
  background-color: transparent;
  cursor: pointer;
`;

const ItemDeleteAll = styled.button`
  position: absolute;
  left: 60%;
  top: 140px;

`;


export default CartItem;
