import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import axios from "axios";
import { getAllMessageRoute, sendMessageRoute } from "../utils/APIRoutes";
import { v4 as uuidv4 } from "uuid";

function ChatContainer({ currentUser, currentChat, socket }) {
  const [arrivalMessage, setarrivalMessage] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        if (currentUser) {
          const response = await axios.post(getAllMessageRoute, {
            from: currentUser._id,
            to: currentChat._id,
          });
          setmessages(response.data);
        } else {
          // console.log("test");
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [currentChat]);

  const scrollRef = useRef();

  const [messages, setmessages] = useState([]);

  const handleSendMsg = async (msg) => {
    try {
      await axios.post(sendMessageRoute, {
        from: currentUser._id,
        to: currentChat._id,
        message: msg,
      });
      socket.current.emit("send-msg", {
        to: currentChat._id,
        from: currentUser._id,
        message: msg,
      });

      const msgs = [...messages];
      msgs.push({ fromSelf: true, message: msg });
      setmessages(msgs);
      // console.log(msgs);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setarrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setmessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

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
                <div ref={scrollRef} key={uuidv4()}>
                  {/* {console.log(message.id)} */}
                  <div
                    className={`message ${
                      message.fromSelf ? "sended" : "recieved"
                    }`}
                    key={index}
                  >
                    <div className="content" key={index}>
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
  // flex-direction : column-reverse;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-auto-rows: 15% 70% 15%;
  }
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
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb{
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 60%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 0.8rem;
        border-radius: 1rem;
        color: white;
      }
      .recieved {
        max-width: 40%;
      }
    }

    .sended {
      justify-content: flex-end;
      .content {
        background-color: green;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: darkgreen;
      }
    }
  }
`;

export default ChatContainer;
