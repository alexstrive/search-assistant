import React from 'react'
import PropTypes from 'prop-types'

import { Container } from 'reactstrap'

import Message from './Message'

const MessageHistory = (props) => {
  return (
    <Container
      style={{ height: '90vh', paddingTop: '1em', overflow: 'scroll' }}
      fluid
    >
      {props.messages.map((message) => {
        return <Message values={message} />
      })}
    </Container>
  )
}

MessageHistory.propTypes = {
  messages: PropTypes.array.isRequired,
}

export default MessageHistory
