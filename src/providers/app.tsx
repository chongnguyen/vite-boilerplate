import { ReactNode } from 'react'
import { AuthProvider } from '@/providers/authentication'
import { HelmetProvider } from 'react-helmet-async'

export const AppProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => {
  return (
    <>
      <HelmetProvider>
        <AuthProvider>{children}</AuthProvider>
      </HelmetProvider>
    </>
  )
}
