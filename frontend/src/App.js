import './App.css';
import React from 'react'
import { connect, sendMsg } from './api/index'
import Header from './components/header/Header';
import ChatHistory from './components/chatHistory/ChatHistory';

// const App = () => {
//   const [chatHistory, setChatHistory] = React.useState([])
//   console.log("chat History", chatHistory)
//   // connect((msg) => )
//   React.useEffect(() => {
//     connect((msg) => {
//       console.log('New Message')
//       setChatHistory(...chatHistory, msg)
//       console.log(chatHistory)
//     })
//   }, [])

//   let send = () => {
//     console.log("Hello")
//     sendMsg("Hello")
//   }

//   return (
//     <div className="App">
//       <Header />
//       <ChatHistory chatHistory={chatHistory}/>
//       <button onClick={send}>Hit</button>
//     </div>
//   )
// }

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

  send () {
    console.log("Hello")
    sendMsg("What's up homie!")
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <button onClick={this.send}>Hit</button>
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
