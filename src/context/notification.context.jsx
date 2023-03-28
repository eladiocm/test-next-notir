import { createContext, useContext, useState } from 'react'
import Notification from '@/components/Notification/Notification'

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [msg, setMsg] = useState('')
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState(undefined)

  const getError = (msg) => {
    setSeverity('error')
    setOpen(true)
    setMsg(msg)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const value = {
    getError
  }

  return (
    <NotificationContext.Provider value={value}>
      <Notification handleClose={handleClose} open={open} severity={severity} msg={msg} />
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) throw new Error('No existe context')
  return context
}
