import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { Form, Input, Button, ButtonGroup } from 'reactstrap'

const MessageComposer = (props) => {
  const { onMessage } = props

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      const messageText = e.target[0].value

      // Clean text input
      e.target[0].value = ''

      if (!messageText) {
        return
      }

      onMessage(messageText)
    },
    [onMessage]
  )

  return (
    <Form onSubmit={handleSubmit}>
      <ButtonGroup style={{ height: 75, width: '100%' }}>
        <Input id="message" type="textarea" style={{ resize: 'none' }} />
        <Button type="success" color="success">
          Отправить
        </Button>
      </ButtonGroup>
    </Form>
  )
}

MessageComposer.defaultProps = {
  onMessage: () => {},
}

MessageComposer.propTypes = {
  onMessage: PropTypes.func.isRequired,
}

export default MessageComposer
