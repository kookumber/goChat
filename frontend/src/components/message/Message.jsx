import React from "react";
import "./message.scss"

class Message extends React.Component {
    constructor(props) {
        super(props)
        let temp = JSON.parse(this.props.message)
        this.state = {
            message: temp
        }
    }
    
    render() {
        return (
            <div className="message">{this.state.message.body}</div>
        )
    }
}

export default Message