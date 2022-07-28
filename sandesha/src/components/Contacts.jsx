import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Contacts({ contacts, currentUser, changeChat}) {
  const [currentUserName, setcurrentUserName] = useState(undefined);
  const [currentUserImage, setcurrentUserImage] = useState(undefined);

  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    // console.log(contacts[5]);
    if (currentUser) {
      setcurrentUserName(currentUser.userName);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserName && (
        <Container>
          <div className="brand">
            <h3>Sandesha</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={index}
                  onClick={()=>{
                    changeCurrentChat(index,contact);
                  }}
                >
                  <div className="username">
                    <h3>{contact.userName}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 85% 5%;
  overflow: hidden;
  background-color: #004146;

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h3 {
      color: white;
      text-transform: uppercase;
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8 rem;&::-webkit-scrollbar{
        width: 0.2rem;
        &-thumb{
            background-color: #ffffff39;
            width: 0.1rem;
            border-radius: 0.5rem;
        }
    }
    .contact {
      background-color: #ffffff39;
      min-height: 3rem;
      width: 90%;
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 1.4rem;
      margin: 0.3rem;
      gap: 1rem;
      align-items: center;
      display: flex;
      transition: 0.3s ease-in-out;
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #86f38d;
    }
  }
  .current-user {
    background-color: #0d9e69;
    display: flex;
    justify-content: center;
    gap: 2rem;
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 120px) and (max-width: 1080px) {
        gap : 0.5rem;
        .username {
            h2{
                font-size: 1.2rem;
            }
        }
    }
  }
`;
export default Contacts;
