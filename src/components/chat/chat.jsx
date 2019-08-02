import React, { useState } from 'react';
import ChatPreview from './chat-preview';
import ChatScreen from './chat-screen';

const Chat = () => {
  const [isOpened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!isOpened);
  };

  if (!isOpened) {
    return <ChatPreview onClick={handleClick} />;
  }

  return <ChatScreen onClick={handleClick} />;
};

export default Chat;
