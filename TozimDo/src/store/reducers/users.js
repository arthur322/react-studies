const INITIAL_STATE = {
  email: '',
  password: '',
};

const usersReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'LOGIN_USER':
      return {
        email: payload.email,
        password: payload.password,
      };
    default:
      return state;
  }
};

export default usersReducer;
