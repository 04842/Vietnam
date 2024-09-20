// src/components/customer-service/PhoneSupport.tsx

import React from 'react'

const phoneNumbers = [
  { country: '台灣', number: '+886 2 1234 5678' },
  { country: '香港', number: '+852 3456 7890' },
  { country: '日本', number: '+81 3 1234 5678' },
  // 添加更多國家和電話號碼...
]

const PhoneSupport: React.FC = () => {
  return (
    <div>
      <h2>電話客服支持</h2>
      <ul>
        {phoneNumbers.map((item, index) => (
          <li key={index}>
            {item.country}: <a href={`tel:${item.number}`}>{item.number}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PhoneSupport