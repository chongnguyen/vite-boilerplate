import { storage } from '@/utils'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
  const token = storage.getToken()

  if (!token) {
    return <Navigate to={'/auth/login'} />
  }

  return <>{<Outlet />}</>
}
