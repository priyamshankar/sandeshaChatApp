import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import axios from "axios";
import { getAllMessageRoute, sendMessageRoute } from "../utils/APIRoutes";

function ChatContainer({ currentUser, currentChat }) {
  const [messages, setmessages] = useState([]);

  const [currUser, setcurrUser] = useState(currentUser);
  const [currChat, setcurrChat] = useState(currentChat);

  useEffect(() => {
    // (async () => {
    setcurrChat(currentChat);
    setcurrUser(currentUser);
    // })();
  }, [currentChat]);

  useEffect(() => {
    (async () => {
      try {
        if (currUser) {
          const response = await axios.post(getAllMessageRoute, {
            from: currUser._id,
            to: currChat._id,
          });
          setmessages(response.data);
        } else {
          setcurrUser(currentUser);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    try {
      await axios.post(sendMessageRoute, {
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
          <Logout />
          </div>
          {/* {console.log(messages)} */}
          <div className="chat-messages">
            {messages.map((message, index) => {
              return (
                <div>
                  {/* {console.log(message.id)} */}
                  <div
                    className={`message ${
                      message.fromSelf ? "sended" : "recieved"
                    }`}
                    key={index}
                  >
                    <div className="content">
                      <p key={index}>{message.message}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ChatInput handleSendMsg={handleSendMsg} />
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-rows: 10% 78% 12%;
  gap: 0.1rem;
  overflow: hidden;
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
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: white;
      }
    }
    
    .sended {
      justify-content: flex-end;
      .content {
        background-color: green;
      }
    }
    .recieved {
      // max-width: 40%;
      
      justify-content: flex-start;
      background-color: darkgreen;
    }
  }
`;

export default ChatContainer;
