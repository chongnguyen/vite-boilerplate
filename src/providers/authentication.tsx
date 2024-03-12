import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { storage } from '@/utils'
import { getMe, login, TAuthUser, TLoginResponse } from '@/features/auth'
import { ROUTES } from '@/config'

type TAuthContextType = {
  user: TAuthUser | null
  token: string | null
  loginFn: (email: string, password: string) => Promise<TLoginResponse>
  logoutFn: () => void
}

const AuthContext = createContext<TAuthContextType | null>(null)
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const foundToken = storage.getToken()
  const [token, setToken] = useState(foundToken)
  const [user, setUser] = useState<TAuthUser | null>(null)

  const loginFn = async (email: string, password: string) => {
    const response = await login({ email, password })

    storage.setToken(response.accessToken)
    setToken(response.accessToken)
    setUser(response.user)

    return response
  }

  const logoutFn = () => {
    storage.removeToken()
    setUser(null)
    setToken('')
    window.location.assign(ROUTES.auth.login)
  }

  useEffect(() => {
    if (foundToken) {
      void getMe(foundToken).then((data) => setUser(data))
    }
  }, [foundToken])

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loginFn,
        logoutFn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

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
