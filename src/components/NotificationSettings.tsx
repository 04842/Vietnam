// src/components/NotificationSettings.tsx

import React, { useState } from 'react'

const NotificationSettings: React.FC = () => {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)

  const handleSaveSettings = () => {
    // 這裡應該調用後端 API 來保存設置
    console.log('保存通知設置:', { emailNotifications, pushNotifications })
  }

  return (
    <div>
      <h2>通知設置</h2>
      <label>
        <input
          type="checkbox"
          checked={emailNotifications}
          onChange={(e) => setEmailNotifications(e.target.checked)}
        />
        接收電子郵件通知
      </label>
      <label>
        <input
          type="checkbox"
          checked={pushNotifications}
          onChange={(e) => setPushNotifications(e.target.checked)}
        />
        接收推送通知
      </label>
      <button onClick={handleSaveSettings}>保存設置</button>
    </div>
  )
}

export default NotificationSettings