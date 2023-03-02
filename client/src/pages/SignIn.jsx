import { Link } from 'react-router-dom'

export const SignIn = () => {
  return (
    <div>
      <h1>SignIn</h1>
      <Link to={'/signup'} className="text-indigo-700">
        signup
      </Link>
    </div>
  )
}
