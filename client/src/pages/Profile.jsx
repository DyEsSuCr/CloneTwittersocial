import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Profile = () => {
  const { data } = useContext(UserContext)

  return (
    <div>
      {data?.map((user) => (
        <div key={user.id}>
          <p>{user.username}</p>
        </div>
      ))}
      <h1>Welcome DYESSUCR</h1>
    </div>
  )
}
