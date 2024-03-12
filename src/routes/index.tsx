import { ProtectedRoute } from '@/components/ProtectedRoute.tsx'
import { ErrorFallback, NotFound } from '@/components/Error'
import { MainLayout } from '@/components/Layout'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
