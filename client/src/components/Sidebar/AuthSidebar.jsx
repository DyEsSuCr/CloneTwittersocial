import { Link } from 'react-router-dom'

export function AuthSidebar ({ authUser }) {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <Link to='/explore'>
          Home
        </Link>
        <Link to='/explore'>
          Explore
        </Link>
        <Link to={authUser.username}>
          Profile
        </Link>
      </div>
      <div>config</div>
    </>
  )
}
