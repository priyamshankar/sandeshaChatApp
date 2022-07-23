import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Contacts({ contacts, currentUser }) {
  const [currentUserName, setcurrentUserName] = useState(undefined);
  const [currentUserImage, setcurrentUserImage] = useState(undefined);

  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    // console.log(contacts[5]);
    if (currentUser) {
      setcurrentUserName(currentUser.userName);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {};

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
                >
                  <div className="username">
                    <h3>{contact.userName}</h3>
                    {/* {console.log(contact)} */}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      )}
      <div className="current-user">
        <div className="username">
          <h1>{currentUserName}</h1>
        </div>
      </div>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #080420;

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

  .contacts{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8 rem;
    .contact{
        background-color: #ffffff39;
    }
  }
`;
export default Contacts;
