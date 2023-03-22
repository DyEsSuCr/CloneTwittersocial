import { AuthUserContext } from '../../context/AuthUserContext'
import { useContext } from 'react'
import { NoAuthSidebar } from './NoAuthSidebar'
import { AuthSidebar } from './AuthSidebar'

export const Sidebars = () => {
  const { authUser } = useContext(AuthUserContext)

  return (
    <div className='flex flex-col justify-between'>
      {authUser ? <AuthSidebar authUser={authUser} /> : <NoAuthSidebar />}
    </div>
  )
}
