import React, { Component } from 'react';
import './App.css';
import Dimmerr from './components/Dimmer';
// import quiz from './Quiz.json';
import Question from './components/Question';

// console.log(quiz[0].questions[0]);
// const q1 = quiz[0].questions[0].question;

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

// Need Question[#] - AnswerList[0] - TrueAnswer[] - UserAnswer
