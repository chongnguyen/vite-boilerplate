import { AuthContext, TAuthContextType } from '@/providers'
import { useContext } from 'react'

export const useAuth = () => {
  const auth = useContext(AuthContext)

  if (!auth) {
    return {
      user: null,
      token: null,
      loginFn: () => {},
      logoutFn: () => {},
    } as unknown as TAuthContextType
  }

  return auth
}
