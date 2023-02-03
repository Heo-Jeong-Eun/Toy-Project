import React, { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

const SignupForm = () => {
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [formValid, setFormValid] = useState([]);

  const submitForm = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    //입력 값이 조건에 맞는지 확인
    setFormValid("");

    const validateEmail = (email) => {
      return email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleSubmit = async() => {
      const formData = {
        userName: name,
        userEmail: email,
        userPassword: password,
      };
      // try {
      //   await axios.post('',formData)
      // } catch (err) {
      //   console.error("회원가입에 실패하였습니다.",err);
      // }
    }

    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      setFormValid("이메일 형식이 올바르지 않습니다");
    }
    if (confirmPassword !== password) {
      setFormValid("비밀번호가 일치하지 않습니다");
    }
    if (name.length === 0 || email.length === 0 || password.length === 0) {
      setFormValid("이름, 이메일, 비밀번호를 입력해 주세요");
    }

    //조건에 맞게 입력 후 제출 -> 회원가입 정보 (formData) 전달
    if (
      isEmailValid &&
      confirmPassword === password &&
      !(name.length === 0 || email.length === 0 || password.length === 0)
    ) {
      handleSubmit();
    }
  };

  return (
    <Container>
      <form ref={formRef}>
        <fieldset>
          <label htmlFor="email">이름: </label>
          <input
            placeholder="enter name"
            required
            ref={nameRef}
            id="name"
            type="name"
            name="name"
            autocomplete="off"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="email">이메일: </label>
          <input
            placeholder="enter email"
            required
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            autocomplete="off"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="password">비밀번호: </label>
          <input
            required
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
            placeholder="enter password"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="confirmPassword">비밀번호 재확인: </label>
          <input
            required
            ref={confirmPasswordRef}
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
          />
        </fieldset>
        <RegisterButton onClick={submitForm}>가입하기</RegisterButton>
      </form>
      <div>{formValid}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    margin-bottom: 100px;
  }

  fieldset {
    margin: 0;
    box-sizing: border-box;
    width: 100%;
  }

  label {
    margin-right: 4px;
  }

  input[type="name"]:invalid,
  input[type="password"]:invalid,
  input[type="email"]:invalid {
    border: 1px solid red;
  }

  input[type="name"]:valid,
  input[type="password"]:valid,
  input[type="email"]:valid {
    border: 1px solid green;
  }

  form:invalid {
    border: 3px solid;
  }
`;

const RegisterButton = styled.button.attrs({ type: "submit" })`
  width: 100%;
  height: 40px;
`;

export default SignupForm;
