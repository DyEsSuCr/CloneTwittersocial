import { Outlet } from 'react-router-dom'
import { AuthUserContext } from '../context/index'
import { useContext, useEffect } from 'react'

export function Root () {
  const { setAuthUser } = useContext(AuthUserContext)

  useEffect(() => {
    const authLogin = async (url) => {
      const res = await fetch(url, {
        credentials: 'include'
      })

      const user = await res.json()

      if (user.messaje) return

      setAuthUser(user.user)
    }

    authLogin('http://localhost:3000/api/authlogin/')
  }, [])

  return (
    <main>
      <Outlet />
    </main>
  )
}
