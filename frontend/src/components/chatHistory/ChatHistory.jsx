import React from "react";
import "./chatHistory.scss"
import Message from "../message/Message"


const ChatHistory = ({ chatHistory }) => {

    const messages = chatHistory.map((msg, idx) => {
        return <Message key={idx} message={msg.data}/>
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