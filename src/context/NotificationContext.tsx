// src/context/NotificationContext.tsx

import React, { createContext, useState, useContext, ReactNode } from 'react'

interface Notification {
  id: string
  type: 'price' | 'itinerary' | 'system'
  message: string
  read: boolean
}

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, 'id' | 'read'>) => void
  markAsRead: (id: string) => void
  clearNotification: (id: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (notification: Omit<Notification, 'id' | 'read'>) => {
    const newNotification = { ...notification, id: Date.now().toString(), read: false }
    setNotifications(prev => [...prev, newNotification])
  }

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ))
  }

  const clearNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id))
  }

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, markAsRead, clearNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}