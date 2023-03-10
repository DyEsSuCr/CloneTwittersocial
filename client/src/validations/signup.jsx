export const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const validateFields = (values) => {
  const { username, email, password, confirmPassword } = values

  const errors = {}

  if (!username) {
    errors.username = 'Username required'
  } else if (!/^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(username)) {
    errors.username = 'Invalid username'
  }

  if (!email) {
    errors.email = 'Email required'
  } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
    errors.email = 'Invalid email address'
  }

  if (!password) {
    errors.password = 'Passoword required'
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
    errors.password =
      'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Confirm passoword'
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Passwords do not match'
  }

  return errors
}
