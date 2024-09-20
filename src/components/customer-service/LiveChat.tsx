// src/components/customer-service/LiveChat.tsx

import React, { useState } from 'react'

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<string[]>([])
  const [inputMessage, setInputMessage] = useState('')

  const toggleChat = () => setIsOpen(!isOpen)

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      setMessages([...messages, `You: ${inputMessage}`])
      setInputMessage('')
      // 這裡應該發送消息到後端或客服系統
      setTimeout(() => {
        setMessages(prev => [...prev, "Customer Service: Thanks for your message. How can I help you?"])
      }, 1000)
    }
  }

  return (
    <div>
      <button onClick={toggleChat}>{isOpen ? '關閉聊天' : '開始聊天'}</button>
      {isOpen && (
        <div>
          <div>
            {messages.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
          <form onSubmit={sendMessage}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="輸入您的消息..."
            />
            <button type="submit">發送</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default LiveChat