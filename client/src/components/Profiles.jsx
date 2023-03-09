import { useContext } from 'react'
import { UserContext } from '../context/index'
import { Outlet, Link } from 'react-router-dom'

export const Profiles = () => {
  const { data } = useContext(UserContext)

  return (
    <div>
      <Outlet />

      {data?.map((user) => (
        <div key={user.id}>
          <p>{user.username}</p>
          <Link to={`/profile/${user.username}`} className='text-red-600'>
            {user.username}
          </Link>
        </div>
      ))}
    </div>
  )
}
