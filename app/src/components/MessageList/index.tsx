import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { api } from '../../services/api'
import { MessageType } from './model'
import styles from './styles.module.scss'

const messagesQueue: MessageType[] = []

const socket = io(import.meta.env.VITE_BACKEND_ENDPOINT)

socket.on('new_message', (newMessage: MessageType) => {
  messagesQueue.push(newMessage)
})

export function MessageList(): React.JSX.Element {
  const [messages, setMessages] = useState<MessageType[]>([])

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prevState) =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean)
        )
        messagesQueue.shift()
      }
    }, 2000)
  }, [])

  useEffect(() => {
    api.get<MessageType[]>('messages/last3').then((response) => {
      setMessages(response.data)
    })
  }, [])
  return (
    <div className={styles['m-list__wrapper']}>
      <ul className={styles['m-list']}>
        {messages.map((message) => {
          return (
            <li key={message.id} className={styles['l-item__message']}>
              <p className={styles['l-item__content']}> {message.text} </p>
              <div className={styles['l-item__user']}>
                <div className={styles['l-item__user--img']}>
                  <img
                    src={message.user.avatar_url}
                    alt={`avatar de  ${message.user.name}`}
                  />
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
