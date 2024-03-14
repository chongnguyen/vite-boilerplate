import { ProtectedRoute } from '@/components/ProtectedRoute'
import { ErrorFallback, NotFound } from '@/components/Error'
import { ContentLayout, MainLayout } from '@/components/Layout'
import { createBrowserRouter } from 'react-router-dom'
import { counterRoutes } from '@/features/counter'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [counterRoutes],
      },
      {
        path: '/',
        element: <ContentLayout />,
        children: [counterRoutes],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
