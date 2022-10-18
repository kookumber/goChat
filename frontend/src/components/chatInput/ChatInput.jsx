import React from "react";
import "./chatInput.scss"

class ChatInput extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="ChatInput">
                <input onKeyDown={this.props.send}
                       placeholder="Enter your message..."/>
            </div>
        )
    }
}

export default ChatInput