import React from "react";
import styled from "styled-components";

const EmptyChat = () => {
  return (
    <Container>
      <Mainbox></Mainbox>
    </Container>
  );
};

export default EmptyChat;

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Mainbox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
