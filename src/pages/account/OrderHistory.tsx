// src/components/account/OrderHistory.tsx

import React, { useState, useEffect } from 'react'

interface Order {
  id: number;
  date: string;
  total: number;
}

const OrderHistory: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // 這裡應該從後端 API 獲取訂單歷史
        // 假設的 API 調用
        const data = await fetch('/api/order-history').then(res => res.json());
        setOrders(data);
      } catch (err) {
        setError('無法載入訂單歷史。請稍後再試。');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (isLoading) return <div>加載中...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>訂單歷史</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              訂單 #{order.id} - 日期: {order.date} - 總金額: ${order.total}
            </li>
          ))}
        </ul>
      ) : (
        <p>目前沒有訂單歷史。</p>
      )}
    </div>
  )
}

export default OrderHistory