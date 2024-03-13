import { ReactNode } from 'react'
import { AuthProvider } from '@/providers/AuthProvider.tsx'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/libs'
import { Toaster } from 'react-hot-toast'

export const AppProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => {
  return (
    <>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster position="top-right" reverseOrder={false} />
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </>
  )
}
