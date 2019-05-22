import React, { Component } from 'react'
import quiz from '../Quiz.json';
import { Transition } from 'semantic-ui-react'

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      animation: 'flash',
      duration: 600,
      visible: true,
      correct: true
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  toggleVisibility = (e) => {
    this.toggle();
    this.setState({ visible: !this.state.visible })
    setTimeout(() => { this.toggle() }, 1500)
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }

  render() {
    // ANIMATION
    const { animation, duration, visible } = this.state
    let boxyClass = ["boxy"];
    if (this.state.addClass) {
      boxyClass.push('green');
    }
    let xtraNames = ' answer box';
    // PROPS
    let questionnum = this.props.questionnum;
    const answerlet = this.props.answerlet;
    function letterToNum() {
      if (answerlet === 'a') {
        return 0;
      } else if (answerlet === 'b') {
        return 1;
      } else {
        return 2;
      }
    }
    let option = quiz[0].questions[questionnum].answers[letterToNum()];

    return (
      <Transition animation={animation} duration={duration} visible={visible}>
        <li onClick={this.toggleVisibility} className={boxyClass.join(' ') + xtraNames} >
          <div className="p-answer" style={styled} onClick={this.toggle.bind(this)}>
            <span>{answerlet}</span>
            {option}
          </div>
        </li>
      </Transition>
    )
  }
}

const styled = {
  color: 'black'
}
