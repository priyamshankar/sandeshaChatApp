import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logout from "./Logout";

function ChatContainer ({ currentUser, currentChat })  {
  //   const [currentUsers, setcurrentUsers] = useState();
  //   useEffect(() => {
  //     setcurrentUsers(currentUser);
  //     console.log(currentUsers.userName);
  //   }, [])

  return(
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
        <Logout/>
        <div className="chat-messages"></div>

        <div className="chat-input"></div>
      </Container>
    )}
  </>
  );
};

const Container = styled.div`
padding-top: 1rem;
.chat-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.32rem;
    padding-left: 2rem;
    .user-details{
        display:flex;
        align-items: center;
        gap: 1rem;
        .username{
            h3{
                color: white;
            }
        }
    }
}
`;

export default ChatContainer;
