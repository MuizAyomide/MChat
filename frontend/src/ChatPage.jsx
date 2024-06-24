import React from "react";
import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatPage = (props) => {
  return <div style={{height: '100vh'}}>
    <PrettyChatWindow
    projectId="6fc90138-9829-4f0c-8a14-c2f1d7a6b4bd"
    username={props.user.username}
    secret={props.user.secret}
    style={{height: '100%'}}
    />
  </div>;
};

export default ChatPage;
