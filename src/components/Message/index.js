import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Row, Col } from 'reactstrap'

import MessageLinks from './Links'

const Message = (props) => {
  const { values } = props
  const isCurrentUser = values.from === 'Вы'
  const date = new Date(values.date)
  return (
    <Row>
      <Col xs={{ size: 8, offset: isCurrentUser ? 4 : 0 }}>
        <Alert color={isCurrentUser ? 'success' : 'primary'}>
          <h6>
            <b>{values.from}</b>
          </h6>
          <div>{values.text}</div>

          <MessageLinks values={values.links} />

          <div>
            <small>
              {date.getDay()}.{date.getMonth() + 1}.{date.getFullYear()}
            </small>
          </div>
        </Alert>
      </Col>
    </Row>
  )
}

Message.propTypes = {
  values: PropTypes.object.isRequired,
}

export default Message
