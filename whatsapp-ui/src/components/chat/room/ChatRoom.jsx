import React, { useEffect, useState } from 'react'
import ChatFooter from '../footer/ChatFooter'
import ChatHeader from '../header/ChatHeader'
import ChatMessage from '../message/ChatMessage'
import './ChatRoom.css'

function ChatRoom() {
    const [seed, setSeed] = useState('');
        
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="chat__room">
            <ChatHeader
                key={seed}
                rooName="Family Name"
                profileImg={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

            <div className="chat__room__body">
                <ChatMessage author = "Monick" />
                <ChatMessage author = "Samuel" />
            </div>

            <ChatFooter />
        </div>
    )
}

export default ChatRoom
