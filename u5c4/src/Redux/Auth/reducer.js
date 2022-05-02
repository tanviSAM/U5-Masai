import { AUTH } from "./action";

const init = {
  auth: false,
  user: {},
};

export const authReducer = (store = init, { type, payload }) => {
  switch (type) {
    case AUTH:
      return { ...store, auth: payload.auth, user: payload.user };
    default:
      return store;
  }
};
