import { Link } from 'react-router-dom'

export const SignUp = () => {
  return (
    <div>
      <h1>SignUp</h1>
      <Link to={'/signin'} className="text-indigo-700">
        signin
      </Link>
    </div>
  )
}
