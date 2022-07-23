import React, { useState } from "react";

const ChatContainer = (currentUser, currentChat) => {
  const [currentUsers, setcurrentUsers] = useState();

  return <div>{currentUsers}</div>;
};

export default ChatContainer;
