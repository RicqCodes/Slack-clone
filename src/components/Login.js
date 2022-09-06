import React, { useEffect } from "react";
import styled from "styled-components";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";

const Login = ({ setUser }) => {
  const signIn = async () => {
    const data = await signInWithGoogle();
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  return (
    <Container>
      <Content>
        <SlackImg>
          <img src="https://i.imgur.com/nPaJP2n.png" alt="" />
        </SlackImg>
        <h1>Sign in Slack</h1>

        <SignInButton onClick={signIn}>Sign in With Google</SignInButton>
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: #fff;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SlackImg = styled.div`
  height: 100px;

  img {
    height: 100%;
  }
`;

const SignInButton = styled.button`
  margin-top: 50px;
  background: #0a8d48;
  color: #fff;
  border: none;
  height: 40px;
  border-radius: 4px;
  padding: 0 10px;
  cursor: pointer;
  font-size: 15px;
`;
