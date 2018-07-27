import React, { Component } from 'react'
import { Dimmer, Header, Icon } from 'semantic-ui-react'

export default class Dimmerr extends Component {
  // state = { active: true }
  state = { active: this.props.passD }
  //
  // handleOpen = () => this.setState({ active: true })
  // handleClose = () => this.setState({ active: false })

  // static getDerivedStateFromProps(props, state){
  //
  // }
  // componentDidMount() {
  //   console.log(this.props);
  //   this.props.passD ? this.setState({ active: true }) : null
  // }
  handleClose = () => {
    this.props.retriggerOpenScreen();
  }

  static getDerivedStateFromProps(props, state) {
    if(props.passD === false) {
      return { active: false }
    } else {
        return {active: true }
      }
  }

  render() {
    let { active } = this.state

    return (
      <div>
        <Dimmer active={active} onClick={this.handleClose} page>
          <Header as='h2' icon inverted>
            <Icon name='hand pointer outline' />
            Touch to Begin!
            <Header.Subheader>Test your knowledge</Header.Subheader>
          </Header>
        </Dimmer>
      </div>
    )
  }
}
