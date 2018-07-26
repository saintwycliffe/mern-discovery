import React, { Component } from 'react';
import './App.css';
import Dimmerr from './components/Dimmer';
import Question from './components/Question';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="tests">
          <p>In Testing Mode</p>
        </div>
        <div className="qna-container">
          <Question />
          <Dimmerr />
        </div>
      </div>
    );
  }
}

export default App;
