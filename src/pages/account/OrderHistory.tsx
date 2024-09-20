// src/components/account/OrderHistory.tsx

import React from 'react'

const OrderHistory: React.FC = () => {
  // 這裡應該從後端 API 獲取訂單歷史
  const orders = [
    { id: 1, date: '2023-09-15', total: 1500 },
    { id: 2, date: '2023-08-20', total: 2000 },
  ]

  return (
    <div>
      <h2>訂單歷史</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            訂單 #{order.id} - 日期: {order.date} - 總金額: ${order.total}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrderHistory