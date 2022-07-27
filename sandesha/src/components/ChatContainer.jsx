import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import Messages from "./Messages";
import axios from "axios";
import { sendMessageRoute } from "../utils/APIRoutes";

function ChatContainer({ currentUser, currentChat }) {
  const handleSendMsg = async (msg) => {
    try {
      const data = await axios.post(sendMessageRoute, {
        from: currentUser._id,
        to: currentChat._id,
        message: msg,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {currentChat && (
        <Container>
          <div className="chat-header">
            <div className="user-details">
              <div className="username">
                <h3>{currentChat.userName}</h3>
              </div>
            </div>
          </div>
          <Logout />
          <Messages />
          <ChatInput handleSendMsg={handleSendMsg} />
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  padding-top: 1rem;
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
`;

export default ChatContainer;
