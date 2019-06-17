export const loginUser = user => ({
  type: 'LOGIN_USER',
  payload: {
    email: user.email,
    password: user.password,
  },
});
