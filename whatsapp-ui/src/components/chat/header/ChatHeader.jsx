import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./ChatHeader.css";

function ChatHeader({ profileImg, roomName }) {
  return (
    <div className="chat__header">

      <div className="chat__headerLeft">
        <Avatar src={profileImg} />
        <div className="chat__headerInfo">
          <h4>{roomName}</h4>
          <p>Last seen {new Date().toUTCString()}</p>
        </div>
      </div>

      <div className="chat__headerRight">
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>

    </div>
  );
}

export default ChatHeader;
