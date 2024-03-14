import { RouteObject } from 'react-router-dom'
import { Counter } from '../components'

export const counterRoutes: RouteObject = {
  path: '/counter',
  element: <Counter />,
}
