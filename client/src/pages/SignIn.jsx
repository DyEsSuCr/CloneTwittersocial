import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

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
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Formik
        initialValues={{ password: '', email: '' }}
        validate={(values) => {
          let errors = {}

          if (!values.email) errors.email = 'Email required'

          if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errors.email = 'Email can only contain letters, numbers, periods, hyphens, and underscores.'
          }

          if (!values.password) errors.password = 'Password required'

          return errors
        }}
        onSubmit={async (values, { resetForm }) => {
          login(values)

          resetForm()
        }}
      >
        {({ errors }) => (
          <Form className="flex flex-col gap-4 shadow-lg shadow-dark-gray p-4 rounded-lg">
            <h1 className="text-2xl font-semibold text-center">SignIn</h1>

            <Field type="email" name="email" placeholder="Email" />
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
