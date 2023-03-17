import { Link } from 'react-router-dom'
export function NoAuthSidebar () {
  return (
    <div className='flex flex-col'>
      <Link to='/signin'>
        SignIn
      </Link>
      <Link to='signup'>
        SignUp
      </Link>
    </div>
  )
}
