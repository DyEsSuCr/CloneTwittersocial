import { createBrowserRouter } from 'react-router-dom'

import { Error } from '../routes/Error'
import { Root } from '../layouts/Root'
import { Home } from '../layouts/Home'
import { Pages } from '../pages/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/signin',
        element: <Pages.SignIn />
      },
      {
        path: '/signup',
        element: <Pages.SignUp />
      },
      {
        path: '/profile/:username',
        element: <Pages.Profile />,
        loader: Pages.loaderProfile
      },
      {
        path: '/explore',
        element: <Pages.Explore />
      }
    ]
  }
])
