import { Outlet } from 'react-router-dom'
import { UserProvider } from '../context/UserContext'

export function Root() {
  return (
    <main>
      <UserProvider>
        <Outlet />
      </UserProvider>
    </main>
  )
}
