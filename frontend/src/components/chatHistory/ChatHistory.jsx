import React from "react";
import "./chatHistory.scss"

const ChatHistory = ({ chatHistory }) => {

    const messages = chatHistory.map((msg, idx) => {
        return <p key={idx}>{msg.data}</p>
    })
    console.log(messages)
    return (
        <div className="chatHistory">
            <h2>Messages</h2>
            {messages}
        </div>
    )
}

export default ChatHistory