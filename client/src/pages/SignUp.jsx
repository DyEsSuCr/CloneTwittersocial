import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { initialValues, validateFields } from '../validations/signup'

export const SignUp = () => {
  const [succes, setSucces] = useState(true)

  const createUser = async (data) => {
    const res = await fetch('http://localhost:3000/api/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const token = await res.json()
    console.log(token)
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={async (values) => {
          createUser(values)
          setSucces(true)
          setTimeout(() => setSucces(false), 5000)
        }}
      >
        {({ errors }) => (
          <Form className='flex flex-col gap-4 shadow-lg shadow-dark-gray p-4 rounded-lg'>
            <h1 className='text-2xl font-semibold text-center'>SignUp</h1>

            <Field type='username' name='username' placeholder='Username' />
            <ErrorMessage name='username' component={() => <div> {errors.username} </div>} />

            <Field type='email' name='email' placeholder='Email' />
            <ErrorMessage name='email' component={() => <div> {errors.email} </div>} />

            <Field type='password' name='password' placeholder='Password' />
            <ErrorMessage name='password' component={() => <div> {errors.password} </div>} />

            <Field type='password' name='confirmPassword' placeholder='Confirm password' />
            <ErrorMessage name='confirmPassword' component={() => <div> {errors.confirmPassword} </div>} />

            <button type='submit'>Enviar</button>

            {!succes && <p>Registrado</p>}

            <Link to='/signin' className='text-indigo-700 mx-auto'>
              signin
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  )
}
