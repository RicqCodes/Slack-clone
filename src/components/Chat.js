import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import DefaultDetails from "./DefaultDetails";
import db from "../firebase";
import {
  doc,
  getDoc,
  orderBy,
  collection,
  onSnapshot,
  query,
  Timestamp,
  addDoc,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

const Chat = ({ user }) => {
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    const collectionRef = collection(db, "rooms");
    const docs = doc(collectionRef, channelId);
    const docsCollection = query(
      collection(docs, "messages"),
      orderBy("timestamp", "asc")
    );
    onSnapshot(docsCollection, (snapshot) => {
      let messages = snapshot.docs.map((doc) => doc.data());
      setMessages(messages);
    });
  };

  const sendMessage = (text) => {
    if (!channelId) return;
    let payload = {
      text: text,
      timestamp: Timestamp.now(),
      user: user.name,
      userImage: user.photo,
    };

    const collectionRef = collection(db, "rooms");
    const docs = doc(collectionRef, channelId);
    const docsCollection = collection(docs, "messages");
    addDoc(docsCollection, payload);
  };

  const getChannel = async () => {
    try {
      const docRef = doc(db, "rooms", channelId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setChannel(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);

  return (
    <Container>
      <HeaderContainer>
        <LeftMsgBoxContainer>
          <MsgBoxLeftItem>
            <NameContainer># {channel && channel.name} </NameContainer>
            <StarContainer>
              <StarBorderIcon />
            </StarContainer>
          </MsgBoxLeftItem>
          <TextContent>
            Company-wide announcements and work-based matters
          </TextContent>
        </LeftMsgBoxContainer>

        <RightMsgBoxContainer>
          <MsgBoxRightItem>
            <Details>Details</Details>
            <DetailsIcon>
              <InfoOutlinedIcon />
            </DetailsIcon>
          </MsgBoxRightItem>
        </RightMsgBoxContainer>
      </HeaderContainer>
      <MessageContainer>
        {messages.length > 0 &&
          messages.map((data, id) => (
            <ChatMessage
              key={id}
              text={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
            />
          ))}
        {messages.length == 0 && (
          <DefaultDetails
            image={"https://i.imgur.com/0CXx1z4.png"}
            text={"No Messages"}
          />
        )}
      </MessageContainer>
      <ChatInput sendMessage={sendMessage} />
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  border-right: 1px solid #faeafa;
  display: grid;
  grid-template-rows: 82px auto min-content;
  min-height: 0;
`;

const HeaderContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
`;

const LeftMsgBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MsgBoxLeftItem = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
`;

const NameContainer = styled.div`
  font-weight: 700;
`;

const StarContainer = styled.div``;

const TextContent = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
`;

const RightMsgBoxContainer = styled.div``;

const MsgBoxRightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  color: #606060;
  cursor: pointer;
`;

const Details = styled.div``;

const DetailsIcon = styled.div``;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
