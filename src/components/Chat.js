import React, { useState, useCallback, useEffect } from 'react'

import MessageHistory from './MessageHistory'
import MessageComposer from './MessageComposer'

import { combinedSearch } from '../helpers/combinedSearch'

const Chat = (props) => {
  const [messages, setMessages] = useState([
    {
      from: 'Бот-поисковик',
      text: `Здравствуйте 👋 Я ваш ассистент 👨‍💻 Чем я могу быть полезен?`,
      date: Date.now(),
    },
  ])

  useEffect(() => {
    const lastMessage = messages[messages.length - 1]

    // Do not process own messages
    if (lastMessage.from === 'Бот-поисковик') {
      return
    }

    combinedSearch({ query: lastMessage.text }).then((links) => {
      setMessages([
        ...messages,
        {
          from: 'Бот-поисковик',
          text: 'Вот, что я нашел',
          links,
          date: Date.now(),
        },
      ])
    })

    return () => {}
  }, [messages])

  const handleMessage = useCallback(
    (text) => {
      setMessages([...messages, { from: 'Вы', text, date: Date.now() }])
    },
    [messages]
  )

  return (
    <div>
      <MessageHistory messages={messages} />
      <MessageComposer onMessage={handleMessage} />
    </div>
  )
}

Chat.propTypes = {}

export default Chat
