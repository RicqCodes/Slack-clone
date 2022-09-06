import React, { useState } from "react";
import styled from "styled-components";

const InfoBox = ({ headText, setInput, setNewChannel }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(term);

    if (!term) return;
    setInput(term);
    setNewChannel(false);
  };

  return (
    <Container>
      <Main onSubmit={onFormSubmit}>
        <TextHead>{headText}</TextHead>
        <InputContainer>
          <Input>
            <input
              type="text"
              value={term}
              placeholder="e.g Manchester-United"
              onChange={(e) => setTerm(e.target.value)}
            />
          </Input>
        </InputContainer>

        <ButtonContainer>
          <button type="submit">Create Your Room</button>
        </ButtonContainer>
      </Main>
    </Container>
  );
};

export default InfoBox;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  height: 300px;
  width: 500px;
  border-radius: 20px;
`;

const Main = styled.form`
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TextHead = styled.div`
  padding: 8px;
  display: inline-block;
  width: 40%;
  border-radius: 3px;
  text-align: center;
  align-self: center;
  font-size: 15px;
  font-weight: 800;
  color: #333;
`;

const InputContainer = styled.div`
  min-width: 300px;
  height: 50px;
`;

const Input = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 50px;
  input {
    background-color: transparent;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    color: #000;
    padding-top: 4px;
    padding-bottom: 4px;
    height: 100%;
    width: 75%;
    box-shadow: inset 0 0 0 1px rgba(104, 74, 104, 0.1);
    border-radius: 5px;
    font-size: 18px;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    font-size: 12px;
    color: #888;
  }
`;

const ButtonContainer = styled.div`
  align-self: center;
  margin-top: 24px;

  button {
    background: transparent;
    padding: 12px;
    border: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background: rgb(104 74 104);
    color: #fff;
  }
`;
