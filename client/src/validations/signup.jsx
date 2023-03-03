export const initialValues = {
  username: '',
  email: '',
  password1: '',
  password2: '',
}

export const validateFields = (values) => {
  const { username, email, password1, password2 } = values

  let errors = {}

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

  if (!password1) {
    errors.password1 = 'Passoword required'
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password1)) {
    errors.password1 =
      'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
  }

  if (!password2) {
    errors.password2 = 'Confirm passoword'
  } else if (password2 != password1) {
    errors.password2 = 'Passwords do not match'
  }

  return errors
}
