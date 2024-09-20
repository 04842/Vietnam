// src/components/NotificationList.tsx

import React from 'react'
import { useNotification } from '../context/NotificationContext'

const NotificationList: React.FC = () => {
  const { notifications, markAsRead, clearNotification } = useNotification()

  return (
    <div>
      <h2>通知</h2>
      {notifications.length === 0 ? (
        <p>沒有新通知</p>
      ) : (
        <ul>
          {notifications.map(notification => (
            <li key={notification.id} style={{ opacity: notification.read ? 0.5 : 1 }}>
              {notification.message}
              {!notification.read && (
                <button onClick={() => markAsRead(notification.id)}>標記為已讀</button>
              )}
              <button onClick={() => clearNotification(notification.id)}>清除</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NotificationList