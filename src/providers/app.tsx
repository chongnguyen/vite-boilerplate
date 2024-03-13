import { ReactNode } from 'react'
import { AuthProvider } from '@/providers/authentication'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/libs'

export const AppProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => {
  return (
    <>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </>
  )
}
