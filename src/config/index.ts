export const API_URL = import.meta.env.VITE_API_URL as string

export const ROUTES = {
  index: '/',
  auth: {
    index: '/auth',
    login: '/auth/login',
    forgotPassword: '/auth/forgotPassword',
    resetPassword: '/auth/resetPassword',
  },
}
