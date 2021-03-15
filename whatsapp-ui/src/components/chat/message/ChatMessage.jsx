import React from 'react'
import './ChatMessage.css'

function message({ author }) {
    return (
        <p className="message receivedMsg">
            <span className="author">{author}</span>
            This is a message...
            <span className="timestamp">{new Date().toUTCString()}</span>
        </p>
    )
}

export default message
