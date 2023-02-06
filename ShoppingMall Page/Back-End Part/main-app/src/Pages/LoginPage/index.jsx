import React, { useState } from "react";
import Nav from "../../Components/Nav";
import styled from "styled-components";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  }
//     if (email.length === 0 || password.length === 0) {
//       setErrMsg(() => "이메일과 비밀번호를 입력해 주세요.");
//     } else if (email === "test@test.com" && password === "1234") {
//       window.location.replace("/");
//     } 

//     try {
//       const response = await axios.post("/user/login", {
//         email: email,
//         password: password,
//   });
//     sessionStorage.setItem("token", response.data.token);
//     window.location.replace("/");
//   } catch (error) {
//     alert("아이디와 비밀번호를 다시 확인해주세요.");
//   }
// };

//   const check = () => {
// else if (email !== "test@test.com" || password !== "1234") {
//       setErrMsg(() => "이메일 또는 비밀번호가 일치하지 않습니다.");
//     }
//   };

  return (
    <>
      <div>
        <Nav linkList={["signup"]} />
      </div>
      <LoginForm onSubmit={handleSubmit}>
        <FormContainer>
        <FormFieldset>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            value={email}
            type="email"
            placeholder="test@test.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            value={password}
            type="password"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormFieldset>
        <FormSubmitButton type="submit" onClick={handleSubmit}>
          Login
        </FormSubmitButton>
        <FormErrorMessage>{errMsg && <text>{errMsg}</text>}</FormErrorMessage>
        </FormContainer>
      </LoginForm>
      
    </>
  );

}


export default Login;

const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  width: 100%;
`;
const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgb(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormFieldset = styled.fieldset`
  text-transform: uppercase;
  border-style: none;
  width: 400px;
  margin: 0;
  padding: 0;
  border: none;
`;


const FormLabel = styled.label`
  letter-spacing: 3px;
  font-size: 1rem;
`;

const FormInput = styled.input`
  width: 100%;
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  padding: 5px 0px;
  text-indent: 6px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: 'system-ui';
  font-size: 0.9rem;
  letter-spacing: 2px;
`;

const FormSubmitButton = styled.button`
  border-style: none;
  border-radius: 5px;
  background-color: #131d47;
  color: white;
  padding: 8px 20px;
  font-family: 'system-ui';
  text-transform: uppercase;
  letter-spacing: .8px;
  display: block;
  margin-top: 10px;
  box-shadow: 2px 2px 5px rgb(0,0,0,0.2);
  cursor: pointer;
`;

const FormErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 10px;
`;

