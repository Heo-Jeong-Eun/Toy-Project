import React, { useEffect, useState } from 'react'
import styled from "styled-components"

const CartTotal = ({cart}) => {
  
  const [cartTotalCount, setCartTotalCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const DeliveryFee = 3000;

  useEffect(()=>{
    setCartTotalCount(cart.reduce((sum,cur)=>sum+cur.quantity,0));
    setCartTotalPrice(cart.reduce((sum,cur)=>sum+(cur.price*cur.quantity),0));

  },[cart])
  return (
    <StyledCartTotal>
      <Header><p>주문정보</p></Header>
      <OrderInfo>
        <OrderDetail>
          <span>상품수</span>
          <span>{cartTotalCount}</span>
        </OrderDetail>
        <OrderDetail>
          <span>상품금액</span>
          <span>{cartTotalPrice}</span>
        </OrderDetail>
        <OrderDetail>
          <span>배송비</span>
          <span>{DeliveryFee}</span>
        </OrderDetail>
      </OrderInfo>
      <OrderTotal>결제하기</OrderTotal>
    </StyledCartTotal>
  )
}

const StyledCartTotal = styled.div`
  position: fixed;
  right: 30px;
  top: 160px;
  width: 30%;
  height: 260px;
  background-color: #f1f1f1;
  margin: 30px;

`;

const Header = styled.div`
  
`;
const OrderInfo = styled.div`
  
`;
const OrderDetail = styled.div`
  
`;
const OrderTotal = styled.button`
  
`;


export default CartTotal