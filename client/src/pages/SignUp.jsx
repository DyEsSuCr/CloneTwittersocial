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

if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)) {
  errors.password =
    'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
}
