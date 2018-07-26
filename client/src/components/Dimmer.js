import React, { Component } from 'react'
import { Dimmer, Header, Icon } from 'semantic-ui-react'

export default class Dimmerr extends Component {
  state = { active: true }

  handleOpen = () => this.setState({ active: true })
  handleClose = () => this.setState({ active: false })

  render() {
    const { active } = this.state
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
