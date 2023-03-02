import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export const SignIn = () => {
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

          if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)
          ) {
            errors.password =
              'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
          }

          return errors
        }}
        onSubmit={(values, { resetForm }) => {
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
