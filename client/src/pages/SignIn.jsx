import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { initialValues, validateFields } from '../validations/signin'

export const SignIn = () => {
  const login = async (data) => {
    const res = await fetch('http://localhost:3000/api/signin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const token = await res.json()

    if (token.error) {
      return
    } else {
      document.cookie = `token=${token.token}; max-age=${60 * 5} path=/; samesite=strict`
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={async (values) => {
          login(values)
        }}
      >
        {({ errors }) => (
          <Form className="flex flex-col gap-4 shadow-lg shadow-dark-gray p-4 rounded-lg">
            <h1 className="text-2xl font-semibold text-center">SignIn</h1>

            <Field type="text" name="email" placeholder="Email" />
            <ErrorMessage name="email" component={() => <div> {errors.email} </div>} />

            <Field type="password" name="password" placeholder="Passoword" />
            <ErrorMessage name="password" component={() => <div> {errors.password} </div>} />

            <button type="submit">Enviar</button>

            <Link to={'/signup'} className="text-indigo-700 mx-auto">
              signup
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  )
}
