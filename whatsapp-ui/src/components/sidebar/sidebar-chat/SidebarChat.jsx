import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import db from "../../../config/firebase";
import "./SidebarChat.css";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !addNewChat ? (
    <div className="sidebarChat">
      <div className="sidebarChat__avatar">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      </div>
      <div className="sidebarChat__info">
        <h4>{name}</h4>
        <p>Last message</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h1>Add new chat</h1>
    </div>
  );
}

export default SidebarChat;
