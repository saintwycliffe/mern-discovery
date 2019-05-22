import React, { Component } from 'react'
import Idle from 'react-idle';
import quiz from '../Quiz.json';
import Answer from './Answer';
import { Dimmer, Header, Icon, Button, Transition } from 'semantic-ui-react';
import Gauge from './Victory.js';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      addClass: false,
      correct: true,
      score: 0,
      question: 0,
      animation: 'pulse',
      duration: 500,
      visible: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  triggerReset = () => {
    this.props.restartGame();
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({
      active: false,
      addClass: false,
      correct: true,
      score: 0,
      question: 0
    });
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  handleClick(e) {
    e.preventDefault();
    let answered = e.target.innerText.charAt(0);
    let currentQ = this.state.question;
    let answer = quiz[0].questions[currentQ].correctAnswer;
    let currentScore = this.state.score;
    answered === answer ? this.setState({ correct: true, score: currentScore + 1 }) : this.setState({ correct: false });

    setTimeout(() => {
      this.handleOpen();
    }, 1000)

  };

  handleOpen = () => this.setState({ active: true });

  handleClose = () => {
    this.setState({ active: false });
    let numberOfQuestions = Object.keys(quiz[0].questions).length; // Currently 5
    this.setState({ question: this.state.question + 1 });
    if (this.state.question === 0) { this.setState({ question: 1 }) };
  }

  onButtonReset = (e) => { this.toggleVisibility(e); this.handleReset(e); };

  render() {
    const { animation, duration, visible } = this.state;
    const { active } = this.state;

    let currentQuestion = this.state.question;
    let numberOfQuestions = Object.keys(quiz[0].questions).length;
    let finishState = numberOfQuestions;
    let ques = quiz[0].questions[currentQuestion].question;
    let fullAnswer = quiz[0].questions[currentQuestion].correctText;

    let boxyClass = ["boxy"];
    if (this.state.addClass) {
      boxyClass.push('green');
    }

    function correct() {
      return (
        <div>
          <i className="check icon"></i>
          <p>Correct!</p>
        </div>
      )
    }
    function incorrect() {
      return (
        <div>
          <i className="times icon"></i>
          <p>Incorrect!</p>
        </div>
      )
    }

    return (
      <div className={currentQuestion + 1 >= finishState ? 'endblue' : 'nothing'}>
        <h1 className="quiz-header"></h1>
        {currentQuestion + 1 < finishState &&
          <div className="full-container">
            {!this.state.active &&
              <Gauge activeQuestion={this.state.active} finished={finishState} questionper={(currentQuestion + 1) / numberOfQuestions} questionnumber={currentQuestion + 1} />
            }
            <div className="quiz-container">
              <div className="question box">
                <p>{ques}</p>
              </div>
              <ul onClick={this.handleClick} className="answers">
                <Answer answerlet="a" questionnum={currentQuestion} />
                <Answer answerlet="b" questionnum={currentQuestion} />
                <Answer answerlet="c" questionnum={currentQuestion} />
              </ul>
            </div>
          </div>
        }
        {currentQuestion + 1 === finishState &&
          <div>
            <h2 className="quiz-complete-h2">Quiz Complete</h2>
            <h1 className="final-score-h1">You got <span className="final-score">{this.state.score}</span>
              <br /> out of <span className="final-score">{this.state.question}</span>
              <br />correct!
          </h1>
            {this.state.score / this.state.question === 1 &&
              <h1><br />Great Job! <br /><br />Now you can advocate<br /> for world-wide bible translation!</h1>
            }
          </div>
        }
        <Dimmer id={this.state.correct ? 'blueback' : 'redback'} active={active} onClick={this.handleClose} page>
          <Header as='h2' icon inverted>
            {this.state.correct ? correct() : incorrect()}
            <Header.Subheader className="subtext">{fullAnswer}</Header.Subheader>
            <div className="touch-continue"><Icon name='hand pointer outline' />Touch to continue...</div>
          </Header>
        </Dimmer>
        <br /><br />
        <div className="bbutn">
          <Transition animation={animation} duration={duration} visible={visible}>
            <Button circular icon='redo' color='black' size='massive' onClick={this.onButtonReset} />
          </Transition>
          <br />
          <br />
          <p>Start Again?</p>
        </div>
        <Idle
          timeout={40000} render={
            ({ idle }) => <div> {idle ? this.triggerReset() : null} </div>
          }
        />
      </div>
    )
  }
}
