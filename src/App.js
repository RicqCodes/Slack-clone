import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Login from "./components/Login";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { collection, onSnapshot } from "firebase/firestore";
import db from "./firebase";
import { logout } from "./firebase";
import DefaultDetails from "./components/DefaultDetails";

function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const signOut = () => {
    logout();
    localStorage.removeItem("user");
    setUser(null);
  };

  // const getChannels = async () => {
  //   const query = await getDocs(collection(db, "rooms"));
  //   const retrievedData = [];
  //   query.forEach((doc) => {
  //     retrievedData.push({ id: doc.id, name: doc.data().name });
  //   });
  //   setRooms(retrievedData);
  // };

  useEffect(() => {
    const query = collection(db, "rooms");
    const unsubscribe = onSnapshot(query, (snapshot) => {
      setRooms(
        snapshot.docs.map((docs) => {
          return { id: docs.id, name: docs.data().name };
        })
      );
    });
    // getChannels();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header signOut={signOut} user={user} />

            <Main>
              <Sidebar rooms={rooms} />
              <Routes>
                <Route path="/room/:channelId" element={<Chat user={user} />} />
                <Route
                  path="/"
                  element={
                    <DefaultDetails
                      image={"https://i.imgur.com/mP1ULKa.png"}
                      text={"Select or Create a Channel"}
                    />
                  }
                />
              </Routes>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
  position: relative;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 260px auto;
`;
