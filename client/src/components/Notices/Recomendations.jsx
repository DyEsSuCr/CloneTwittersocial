import { useContext } from 'react'
import { UserContext, AuthUserContext } from '../../context/index'
import { Link } from 'react-router-dom'

export const Recomendations = () => {
  const { data } = useContext(UserContext)
  const { authUser } = useContext(AuthUserContext)

  return (
    <div>
      {data?.filter(user => user.username !== authUser?.username).map((user) => (
        <div key={user.id}>
          <p>{user.username}</p>
          <Link to={`/${user.username}`} className='text-red-600'>
            {user.username}
          </Link>
        </div>
      ))}
    </div>
  )
}
