import React, { useState} from "react";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
import styled from "styled-components";

function ChatInput({ handleSendMsg }) {
  const [showEmojiPicker, setshowEmojiPicker] = useState(false);
  const [msg, setmsg] = useState("");

  const handleEmojiPickerhideShow = () => {
    setshowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emoji) => {
    let message = msg;
    message += emoji.emoji;
    setmsg(message);
  };

  const sendChat = (e) => {
    e.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setmsg("");
    }
  };

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(e) => sendChat(e)}>
        <input
          type="text"
          placeholder="Type Your message here"
          value={msg}
          onChange={(e) => setmsg(e.target.value)}
        />
        <button className="submit" onClick={sendChat}>
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  align-items: center;
  background-color: #088f8f;
  padding: 0 2rem;
  padding-bottom: 0.3rem;
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      .emoji-picker-react{
        position: absolute; 
        top: -350px;
        background-color: #ffff00c8;
        box-shadow: 3 15px 20px #088f8f;
        border-color: green;
        .emoji-categories{
            button{
                filter: contrast(0);
            }
        }
        .emoji-search{
            background-color: transparent;
            border-color: green;
        }
        .emoji-group: before
    }
    }
  }

  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-content: center;
    gap: 2rem;
    background-color: #ffffff34;
    input{
        width: 90%;
        height: 60%;
        background-color: transparent;
        color: white;
        border: none;
        padding-left: 1rem;
        font-size: 1.2rem;
        &::selection{
            background-color: green;
        }
        &:focus{
            outline: none;

        }
    }

    button{
        padding 0.3rem 2rem;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-item: center;
        background-color: #2AAA8A;
        border: none;
        svg{
            font-size: 2rem;
            color: white;

        }
    }
  }
`;
export default ChatInput;
