import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import { sidebarItems } from "../data/SidebarData";
import InfoBox from "./InfoBox";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebase";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ rooms }) => {
  const navigate = useNavigate();
  const [newChannel, setNewChannel] = useState(false);
  const [input, setInput] = useState("");
  const ref = useRef();

  const addChannel = () => {
    if (!input) return;

    const add = collection(db, "rooms");

    addDoc(add, { name: input });
  };

  const goToChannel = (id) => {
    if (id) navigate(`/room/${id}`);
  };

  useEffect(() => {
    addChannel();
  }, [input]);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) return;
      setNewChannel(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  return (
    <Container ref={ref}>
      {newChannel ? (
        <InfoBox
          headText={"Give it a Name!"}
          setInput={setInput}
          setNewChannel={setNewChannel}
        />
      ) : (
        ""
      )}
      <WorkspaceContainer>
        <Name>Ricqcodes</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>

      <MainChannels>
        {sidebarItems.map((item, id) => {
          return (
            <MainChannelItem key={id}>
              {item.icon}
              {item.text}
            </MainChannelItem>
          );
        })}
      </MainChannels>

      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon onClick={() => setNewChannel(true)} />
        </NewChannelContainer>

        <ChannelsList>
          {rooms.map((list, id) => {
            return (
              <Channel key={id} onClick={() => goToChannel(list.id)}>
                # {list.name}
              </Channel>
            );
          })}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
`;

const WorkspaceContainer = styled.div`
  color: #fff;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;

  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 22px;
`;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  margin-top: 10px;

  :hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 18px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
  cursor: pointer;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;
