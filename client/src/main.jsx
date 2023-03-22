import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { AuthUserProvider, UserProvider } from '../src/context/index'
import { router } from './routes'

import './index.css'

createRoot(document.getElementById('root')).render(
  <AuthUserProvider>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </AuthUserProvider>
)
