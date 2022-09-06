import React, { useEffect } from "react";
import styled from "styled-components";
import useGenerateRandomColor from "./useGenerateRandomColor";

const ChatMessage = ({ text, name, image, timestamp }) => {
  const [color, generateColor] = useGenerateRandomColor();

  useEffect(() => {
    generateColor();
  }, [text]);

  return (
    <div>
      <Container>
        <UserAvatar>
          <img src={image} alt="User Avatar" />
        </UserAvatar>
        <MessageContent>
          <Name style={{ color: color }}>
            {name}
            <span>{new Date(timestamp.toDate()).toUTCString()}</span>
          </Name>
          <Text>{text}</Text>
        </MessageContent>
      </Container>
    </div>
  );
};

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 5px;

  :hover {
    background: #f7e2f8;
  }
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;

  img {
    width: 100%;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;

  span {
    font-weight: 400;
    color: rgb(97, 96, 97);
    margin-left: 8px;
    font-size: 13px;
  }
`;

const Text = styled.div``;
