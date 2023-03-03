export const initialValues = { password: '', email: '' }

export const validateFields = (values) => {
  const { email, password } = values

  let errors = {}

  if (!email) {
    errors.email = 'Email required'
  } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
    errors.email = 'Invalid email address'
  }

  if (!password) errors.password = 'Password required'

  return errors
}
