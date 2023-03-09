import { Outlet } from 'react-router-dom'
import { AuthUserProvider, UserProvider } from '../context/index'

export function Root () {
  return (
    <main>
      <AuthUserProvider>
        <UserProvider>
          <Outlet />
        </UserProvider>
      </AuthUserProvider>
    </main>
  )
}
