import React, { Component } from 'react';
import './App.css';
import Dimmerr from './components/Dimmer';
import Question from './components/Question';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      makeActive: true
    }
  }

  triggerEnd = (callme) => {
    this.setState({ makeActive: !this.state.makeActive })
  }

  render() {
    let gamePlay = "";
    if(this.state.makeActive) {
      console.log('reached tru')
      gamePlay = (
        <Question restartGame={this.triggerEnd} />
      )
    } else {
      gamePlay = (
        <Dimmerr flipDimmer={this.triggerEnd} />
      )
    }

    return (
      <div className="App">
        <div className="tests">
          <p>In Testing Mode</p>
        </div>
        <div className="qna-container">
          {gamePlay}
        </div>
      </div>
    );
  }
}

export default App;
