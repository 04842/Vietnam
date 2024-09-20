// src/components/customer-service/FAQ.tsx

import React, { useState } from 'react'

const faqData = [
  {
    question: "如何更改或取消我的預訂？",
    answer: "您可以在您的帳戶中的'我的預訂'部分找到更改或取消預訂的選項。請注意，某些預訂可能有特定的取消政策。"
  },
  {
    question: "你們接受哪些支付方式？",
    answer: "我們接受主要的信用卡（Visa、MasterCard、American Express）、PayPal和Apple Pay。"
  },
  // 添加更多FAQ項目...
]

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div>
      <h2>常見問題</h2>
      {faqData.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => toggleQuestion(index)}>{item.question}</h3>
          {activeIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  )
}

export default FAQ