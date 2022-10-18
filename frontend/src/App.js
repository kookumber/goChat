import './App.css';
import React from 'react'
import { connect, sendMsg } from './api/index'
import Header from './components/header/Header';
import ChatHistory from './components/chatHistory/ChatHistory';
import ChatInput from './components/chatInput/ChatInput';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount(){
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  send(e) {
    if (e.keyCode === 13) {
      sendMsg(e.target.value)
      e.target.value = ""
    }
    
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send}/>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
