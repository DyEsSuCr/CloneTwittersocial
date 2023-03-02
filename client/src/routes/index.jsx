import { createBrowserRouter } from 'react-router-dom'

import { Error } from '../routes/Error'
import { Root } from '../layouts/Root'
import { Home } from '../layouts/Home'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
])