import { ReactNode } from 'react'
import { AuthProvider } from '@/providers/AuthProvider.tsx'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/libs'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from '@/stores'

export const AppProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => {
  return (
    <>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <Toaster position="top-right" reverseOrder={false} />
            <AuthProvider>{children}</AuthProvider>
          </Provider>
        </QueryClientProvider>
      </HelmetProvider>
    </>
  )
}
