import React from 'react'
import styled from "styled-components"

const CartTotal = ({cart}) => {
  
  return (
    <StyledCartTotal>
      <Header><p>주문정보</p></Header>
      <OrderInfo>
        <OrderDetail>
          <p>상품수</p>
          <p></p>
        </OrderDetail>
        <OrderDetail>
          <p>상품금액</p>
          <p></p>
        </OrderDetail>
        <OrderDetail>
          <p>배송비</p>
          <p></p>
        </OrderDetail>
      </OrderInfo>
      <OrderTotal></OrderTotal>
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
const OrderTotal = styled.div`
  
`;


export default CartTotal