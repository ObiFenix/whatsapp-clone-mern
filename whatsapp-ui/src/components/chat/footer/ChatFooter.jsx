import React, { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import { InsertEmoticon, Mic, SendOutlined } from "@material-ui/icons";
import "./ChatFooter.css";
// import message from "../message/ChatMessage";

function ChatFooter() {
  // const [message, setMessage] = useState("");
  const [inputMsg, setInputMsg] = useState('');

  useEffect(() => {
    setInputMsg(inputMsg);
  }, []);

  const sendMessage = () => {
    // db store
    
    console.log(inputMsg);
    setInputMsg('');
  };

  return (
    <div className="chat__room__footer">
      <IconButton>
        <InsertEmoticon />
      </IconButton>

      <form>
        <input
          className="chat__room__message"
          type="text"
          placeholder="Type message"
          value={inputMsg}
          onChange={(e) => setInputMsg(e.target.value)}
        />
        <IconButton
          className="chat__room__submitBtn"
          aria-label="submit"
          type="submit"
          onClick={sendMessage}
        >
          <SendOutlined />
        </IconButton>
      </form>

      <IconButton>
        <Mic />
      </IconButton>
    </div>
  );
}

export default ChatFooter;
