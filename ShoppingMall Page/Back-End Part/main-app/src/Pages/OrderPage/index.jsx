import React, { useState, useContext } from "react";
import Nav from "../../Components/Nav";
import styled from "styled-components";
import Footer from "../../Components/Footer";
import { GlobalContext } from "../../Context/Context";

const Order = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [add, setAdd] = useState("");

  const {cart} = useContext(GlobalContext);

  const handleSubmit = () => {
    alert("주문 완료 되었습니다.");
    //window.location.replace("/");
  };

  return (
    <>
      <div>
        <Nav linkList={["signup"]}></Nav>
      </div>
      <Container onSubmit={handleSubmit}>
        <OrderInfo>
          <Title>배송지 정보</Title>
          <label>
            <P>이름</P>
            <input
              type="text"
              value={name}
              placeholder="이름"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <P>연락처</P>
            <input
              type="text"
              value={num}
              placeholder="01012345678"
              onChange={(e) => setNum(e.target.value)}
            />
          </label>
          <label>
            <P>주소</P>
            <input
              type="text"
              value={add}
              onChange={(e) => setAdd(e.target.value)}
            />
          </label>
          <label>
            <P>요청사항</P>
            <select>
              <option>배송시 요청사항을 선택해주세요.</option>
              <option>직접 수령하겠습니다.</option>
              <option>배송 전 연락바랍니다.</option>
              <option>부재 시 경비실에 맡겨주세요.</option>
              <option>부재 시 문 앞에 놓아주세요.</option>
              <option>부재 시 택배함에 넣어주세요.</option>
              {/* <option>직접 입력</option> */}
            </select>
          </label>
        </OrderInfo>

        <PaymentInfo>
          <p>결제정보</p>
          <P>주문상품</P>
          <P>상품총액</P>
          <P>배송비</P>
          <P>총 결제금액</P>
          <button type="submit">결제하기</button>
        </PaymentInfo>
      </Container>
      <Footer></Footer>
    </>
  );
};

const Container = styled.form`
  display: flex;
  width: 100%;
`;
const OrderInfo = styled.div`
  width: 60%;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 5px 10px grey;
  & P {
    padding-bottom: 10px;
  }
  & label {
    display: block;
    padding-bottom: 20px;
  }

  & input {
    width: 80%;
  }

  & P {
    font-weight: bold;
    weight: 30%;
  }
`;

const Title = styled.span`
  color: #333 !important;
  font-size: 20px !important;
  font-weight: normal !important;
  display: table-cell;
  vertical-align: middle;
  text-align: right;
  text-decoration: none;
`;

const P = styled.p`
  font-size: 16px;
  font-weight: bold;
  width: 25%;
  display: table-cell;
  vertical-align: middle;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
  text-decoration: none;
`;

const PaymentInfo = styled.div`
  box-shadow: 0 5px 10px grey;
  padding: 10px;
  width: 40%;
  margin: 10px;

  & P {
    border-bottom: 1px grey solid;
    padding-bottom: 10px;
    padding-top: 10px;
    display: flex;
    width: 25%;
  }

  & button {
    width: 100%;
    height: 40px;
    background: #131d47;
    border: none;
    color: white;
  }
`;

export default Order;
