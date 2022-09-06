import React, { useState } from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import StrikethroughSOutlinedIcon from "@mui/icons-material/StrikethroughSOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

const ChatInput = ({ sendMessage }) => {
  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!input) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div>
      <Container>
        <InputContainer>
          <form>
            <TextArea>
              <input
                type="text"
                value={input}
                placeholder="Start conversation"
                onChange={(e) => setInput(e.target.value)}
              />
              <Icons>
                <FlashOnOutlinedIcon />
                <FormatBoldOutlinedIcon />
                <FormatItalicOutlinedIcon />
                <StrikethroughSOutlinedIcon />
                <CodeOutlinedIcon />
                <LinkOutlinedIcon />
                <FormatListNumberedOutlinedIcon />
                <MoreHorizOutlinedIcon />
                <AbcOutlinedIcon />
                <AlternateEmailOutlinedIcon />
                <SentimentSatisfiedOutlinedIcon />
                <AttachFileOutlinedIcon />
              </Icons>
            </TextArea>
            <SendButton type="submit" onClick={send}>
              <Send />
            </SendButton>
          </form>
        </InputContainer>
      </Container>
    </div>
  );
};

export default ChatInput;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
`;

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;

  form {
    display: flex;
    height: 120px;
    align-items: center;
    padding: left;
    justify-content: center;
    margin-left: 20px;

    input {
      flex: 1;
      border: none;
      font-size: 16px;
      width: 100%;
      margin-bottom: 15px;
    }

    input:focus {
      outline: none;
    }
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Icons = styled.div`
  display: flex;
  gap: 45px;
  color: #8d8d8e;
  justify-content: center;
  width: 100%;
  border-top: 1px solid rgba(83, 39, 83, 0.13);
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
`;

const SendButton = styled.button`
  background: #3f0e40;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 5px;
  cursor: pointer;
  border: none;

  .MuiSvgIcon-root {
    width: 18px;
  }

  :hover {
    background: #e8a7ea;
  }
`;

const Send = styled(SendIcon)`
  color: #d9d9d9;
`;
