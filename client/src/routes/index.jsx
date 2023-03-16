import { createBrowserRouter } from 'react-router-dom'

import { Error } from '../routes/Error'
import { Root } from '../layouts/Root'
import { Home } from '../layouts/Home'
import { App } from '../layouts/App'
import { Pages } from '../pages/index'
import { Explore } from '../pages/Explore'

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
        path: '/',
        element: <App />,
        children: [
          {
            path: '/:username',
            element: <Pages.Profile />,
            loader: Pages.loaderProfile
          },
          {
            path: '/explore',
            element: <Explore />
          }
        ]
      }
    ]
  }
])
