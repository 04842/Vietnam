// src/components/PriceAlert.tsx

import React, { useState } from 'react'
import { useNotification } from '../context/NotificationContext'

interface PriceAlertProps {
  productId: string
  currentPrice: number
}

const PriceAlert: React.FC<PriceAlertProps> = ({ productId, currentPrice }) => {
  const [alertPrice, setAlertPrice] = useState(currentPrice)
  const { addNotification } = useNotification()

  const handleSetAlert = () => {
    // 這裡應該調用後端 API 來設置價格提醒
    console.log(`為產品 ${productId} 設置價格提醒：${alertPrice}`)
    addNotification({
      type: 'price',
      message: `已為產品 ${productId} 設置價格提醒：${alertPrice}`
    })
  }

  return (
    <div>
      <input
        type="number"
        value={alertPrice}
        onChange={(e) => setAlertPrice(Number(e.target.value))}
      />
      <button onClick={handleSetAlert}>設置價格提醒</button>
    </div>
  )
}

export default PriceAlert