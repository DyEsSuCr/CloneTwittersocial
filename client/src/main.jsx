import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { AuthUserProvider, UserProvider } from '../src/context/index'
import { router } from './routes'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthUserProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </AuthUserProvider>
  </React.StrictMode>
)
