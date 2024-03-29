import { Link, Navigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { initialValues, validateFields } from '../validations/signin'
import { useContext } from 'react'
import { AuthUserContext } from '../context/index'

export const SignIn = () => {
  const { authUser, setAuthUser } = useContext(AuthUserContext)

  const login = async (data) => {
    const res = await fetch('http://localhost:3000/api/signin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })

    const user = await res.json()

    setAuthUser(user.user)
  }

  const logout = () => {
    fetch('http://localhost:3000/api/logout/', {
      credentials: 'include'
    })
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      {authUser && <Navigate to={`/${authUser.username}`} />}
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={async (values) => {
          login(values)
        }}
      >
        {({ errors }) => (
          <Form className='flex flex-col gap-4 shadow-lg shadow-dark-gray p-4 rounded-lg'>
            <h1 className='text-2xl font-semibold text-center'>SignIn</h1>

            <Field type='text' name='email' placeholder='Email' />
            <ErrorMessage name='email' component={() => <div> {errors.email} </div>} />

            <Field type='password' name='password' placeholder='Passoword' />
            <ErrorMessage name='password' component={() => <div> {errors.password} </div>} />

            <button type='submit'>Enviar</button>

            <Link to='/signup' className='text-indigo-700 mx-auto'>
              signup
            </Link>

            <button type='button' onClick={logout}>clearCokkie</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
