import React from 'react'
import PropTypes from 'prop-types'

const MessageLinks = (props) => {
  const { values } = props

  // No links provided
  if (!values) {
    return <div></div>
  }

  return (
    <div>
      {values.google && (
        <div>
          <br />
          <b>Google: </b>
          <br />
          <a href={values.google.url} target="_blank" rel="noopener noreferrer">
            {values.google.text}
          </a>
        </div>
      )}

      {values.bing && (
        <div>
          <br />
          <b>Bing: </b>
          <br />
          <a href={values.bing.url} target="_blank" rel="noopener noreferrer">
            {values.bing.text}
          </a>
        </div>
      )}

      {values.wikipedia && (
        <div>
          <br />
          <b>Wikipedia: </b>
          <br />
          <a
            href={values.wikipedia.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {values.wikipedia.text}
          </a>
        </div>
      )}
    </div>
  )
}

MessageLinks.propTypes = {
  values: PropTypes.object.isRequired,
}

export default MessageLinks
