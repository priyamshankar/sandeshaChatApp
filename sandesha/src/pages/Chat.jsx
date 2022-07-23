import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute } from "../utils/APIRoutes";
import Contacts from "../components/Contacts";

function Chat() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [CurrentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    (async () => {
      if (await !localStorage.getItem("sandeshaUser")) {
        navigate("/login");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("sandeshaUser")));
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (CurrentUser) {
        const data = await axios.get(`${allUsersRoute}/${CurrentUser._id}`);
        setContacts(data.data);
      }
    })();
  }, [CurrentUser]);

  return (
    <>
      <Container>
        <div className="container">
          <Contacts contacts={contacts} currentUser={CurrentUser} />
          {/* <Contacts/> */}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #1b353a;

  .container {
    height: 85vh;
    width: 85vw;
    background-color: #0f2731;
    display: grid;
    grid-template-column: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-column: 35% 65%;
    }
  }
`;
export default Chat;
