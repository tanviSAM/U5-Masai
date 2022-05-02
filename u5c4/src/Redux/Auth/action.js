export const AUTH = "AUTH";

export const checkAuth = (state) => {
  return {
    type: AUTH,
    payload: state,
  };
};
