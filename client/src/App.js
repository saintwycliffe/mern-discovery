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

  changeDimmerStatus = () => {
    this.setState({ makeActive: false })
  }

  triggerEnd = (callme) => {
    this.setState({ makeActive: true })
  }

  render() {
    return (
      <div className="App">
        <div className="tests">
          <p>In Testing Mode</p>
        </div>
        <div className="qna-container">
          <Question restartGame={this.triggerEnd} />
          <Dimmerr passD={this.state.makeActive} retriggerOpenScreen={this.changeDimmerStatus} />
        </div>
      </div>
    );
  }
}

export default App;
