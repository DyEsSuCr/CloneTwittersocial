import { createBrowserRouter } from 'react-router-dom'

import { Root } from '../layouts/Root'
import { Error } from '../routes/Error'

import { SignUp } from '../pages/SignUp.jsx'
import { SignIn } from '../pages/SignIn.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <h1>Index</h1>,
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
